import { Link, Route, Routes, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../types/const';
import SimilarFilms from '../similar-films/similar-films';
import Tabs from '../tabs/tabs';
import MoviePageDetails from './movie-page-details';
import MoviePageOverview from './movie-page-overview';
import MoviePageReviews from './movie-page-reviews';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  changeFavoriteFilmStatusAction,
  // eslint-disable-next-line comma-dangle
  loadFilmByIdAction,
} from '../../store/api-actions';
import { useEffect } from 'react';
import Spinner from '../spinner/spinner';
import NotFoundPage from '../not-found-page/not-found-page';
import Logo from '../logo/logo';
import User from '../user/user';
import VisuallyHidden from '../visually-hidden/visually-hidden';
import Footer from '../footer/footer';
import FilmBackgroundImage from '../film-background-image/film-background-image';

function Movie() {
  const dispatch = useAppDispatch();
  const { film, isFetching, error } = useAppSelector(({ FILM }) => FILM);
  const { authorizationStatus } = useAppSelector(({ AUTH }) => AUTH);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(loadFilmByIdAction(id));
    }
  }, [dispatch, id]);

  if (error) {
    return <NotFoundPage />;
  }

  if (isFetching || !film) {
    return <Spinner />;
  }

  const handleFavoriteButtonClick = () => {
    if (id) {
      const status = film.isFavorite ? 0 : 1;
      dispatch(changeFavoriteFilmStatusAction({ status: String(status), id }));
    }
  };

  return (
    <>
      <VisuallyHidden />
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmBackgroundImage film={film} />
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <User />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`${AppRoute.Play}/${id}`}>
                  <button
                    className="btn btn--play film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button
                  onClick={handleFavoriteButtonClick}
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  {film.isFavorite ? (
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  )}
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth ? (
                  <Link
                    to={`${AppRoute.Film}/${id}${AppRoute.Review}`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <Tabs />
              <Routes>
                <Route index element={<MoviePageOverview film={film} />} />
                <Route
                  path="/overview"
                  element={<MoviePageOverview film={film} />}
                />
                <Route
                  path="/details"
                  element={<MoviePageDetails film={film} />}
                />
                <Route path="/reviews" element={<MoviePageReviews />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <SimilarFilms genre={film.genre} currentFilmId={film.id} />
        <Footer />
      </div>
    </>
  );
}
export default Movie;
