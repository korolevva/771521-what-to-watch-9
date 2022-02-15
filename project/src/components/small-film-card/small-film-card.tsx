import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/const';

function SmallFilmCard() {
  return (
    <article className="small-film-card catalog__films-card">
      <Link to={AppRoute.Film}>
        <div className="small-film-card__image">
          <img
            src="img/war-of-the-worlds.jpg"
            alt="War of the Worlds"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
            War of the Worlds
          </a>
        </h3>
      </Link>
    </article>
  );
}
export default SmallFilmCard;
