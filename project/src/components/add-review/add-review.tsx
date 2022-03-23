import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadFilmsAction } from '../../store/api-actions';
import FilmBackgroundImage from '../film-background-image/film-background-image';
import Logo from '../logo/logo';
import Spinner from '../spinner/spinner';
import User from '../user/user';
import VisuallyHidden from '../visually-hidden/visually-hidden';
import AddReviewForm from './add-review-form';

function AddReview() {
  const dispatch = useAppDispatch();
  const { films, isDataLoaded } = useAppSelector(({ FILMS }) => FILMS);
  useEffect(() => {
    if (films.length === 0) {
      dispatch(loadFilmsAction());
    }
  }, [dispatch, films.length]);
  const { id } = useParams();
  const film =
    films.find((currentFilm) => currentFilm.id === Number(id)) || films[0];

  if (films.length === 0 || isDataLoaded) {
    return <Spinner />;
  }
  return (
    <>
      <VisuallyHidden />
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <FilmBackgroundImage film={film} />
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo />
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">
                    {film.name}
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <User />
          </header>
          <div className="film-card__poster film-card__poster--small">
            <img
              src={film.posterImage}
              alt={film.name}
              width="218"
              height="327"
            />
          </div>
        </div>
        <AddReviewForm />
      </section>
    </>
  );
}
export default AddReview;
