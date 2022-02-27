import { Film } from '../../types/film';

type Props = {
  film: Film;
};

function MoviePageDetails({ film }: Props) {
  return (
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{film.director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          {film.starring.join(', ')}
        </span>
      </p>
    </div>
  );
}

export default MoviePageDetails;
