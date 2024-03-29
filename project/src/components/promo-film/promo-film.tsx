import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeFavoriteFilmStatusAction } from '../../store/api-actions';
import { loadPromoFilmAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/change-auth-status-process/selectors';
import { getErrorPromoFilm } from '../../store/promo-film-process/selectors';
import { getPromoFilm } from '../../store/promo-film-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../types/const';
import Logo from '../logo/logo';
import Spinner from '../spinner/spinner';
import User from '../user/user';

function PromoFilm() {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getPromoFilm);
  const error = useAppSelector(getErrorPromoFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(loadPromoFilmAction());
  }, [dispatch]);

  if (error) {
    return null;
  }

  if (!film) {
    return <Spinner />;
  }

  const handleFavoriteButtonClick = () => {
    const status = film.isFavorite ? 0 : 1;
    dispatch(
      changeFavoriteFilmStatusAction({
        status: String(status),
        id: String(film.id),
      }),
    );
  };

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo />
        <User />
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={film.posterImage}
              alt={film.name}
              width="218"
              height="327"
            />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>
            <div className="film-card__buttons">
              <Link
                to={`${AppRoute.Play}/${film.id}`}
                style={{ textDecoration: 'none', marginRight: '14px' }}
              >
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
              {authorizationStatus === AuthorizationStatus.Auth ? (
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;
