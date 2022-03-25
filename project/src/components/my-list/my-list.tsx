import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadFavoriteFilmsAction } from '../../store/api-actions';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import NotFoundPage from '../not-found-page/not-found-page';
import SmallFilmCard from '../small-film-card/small-film-card';
import Spinner from '../spinner/spinner';
import User from '../user/user';
import VisuallyHidden from '../visually-hidden/visually-hidden';

function MyList() {
  const { films, error, isFetching } = useAppSelector(
    ({ FAVORITE }) => FAVORITE,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFavoriteFilmsAction());
  }, [dispatch]);

  const smallFilmCards = useMemo(
    () =>
      films.map((film) => (
        <SmallFilmCard
          key={film.id}
          name={film.name}
          posterImage={film.previewImage}
          id={film.id}
          videoLink={film.previewVideoLink}
        />
      )),
    [films],
  );

  if (error) {
    return <NotFoundPage />;
  }

  if (isFetching || !films) {
    return <Spinner />;
  }
  return (
    <>
      <VisuallyHidden />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list</h1>
          <User />
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__films-list">{smallFilmCards}</div>
        </section>
        <Footer />
      </div>
    </>
  );
}
export default MyList;
