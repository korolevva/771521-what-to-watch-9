import { Link, Route, Routes, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../types/const';
import SimilarFilms from '../similar-films/similar-films';
import Tabs from '../tabs/tabs';
import MoviePageDetails from './movie-page-details';
import MoviePageOverview from './movie-page-overview';
import MoviePageReviews from './movie-page-reviews';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  changeFavoriteFilmStatusAction,
  // eslint-disable-next-line comma-dangle
  loadFilmByIdAction,
} from '../../store/api-actions';
import { useEffect } from 'react';
import Spinner from '../spinner/spinner';
import NotFoundPage from '../not-found-page/not-found-page';
import Header from '../header/header';

function Movie() {
  const dispatch = useAppDispatch();
  const { film, isFetching, error } = useAppSelector(({ FILM }) => FILM);
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
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
      <div className="visually-hidden">
        <svg>
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <polygon
                id="+"
                fill="#EEE5B5"
                points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"
              />
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z"
              fill="#FFF9D9"
              fillOpacity="0.7"
            />
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
              fill="#EEE5B5"
            />
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <symbol id="play-s" viewBox="0 0 19 19">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0L19 9.5L0 19V0Z"
                fill="#EEE5B5"
              />
            </symbol>
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Artboard"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <polygon
                id="Line"
                fill="#EEE5B5"
                fillRule="nonzero"
                points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"
              />
              <polygon
                id="Line"
                fill="#EEE5B5"
                fillRule="nonzero"
                points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"
              />
            </g>
          </symbol>
        </svg>
      </div>

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

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

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Movie;
