import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/const';

/* eslint-disable no-console */
type Props = {
  name: string;
  posterImage: string;
  id: number;
  onActiveFilmsSet: React.Dispatch<React.SetStateAction<number>>;
};

function SmallFilmCard({ name, posterImage, id, onActiveFilmsSet }: Props) {
  const handleMouseEnter = () => {
    onActiveFilmsSet(id);
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img
          src={posterImage}
          alt="War of the Worlds"
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}
export default SmallFilmCard;
