import { useState } from 'react';
import { films } from '../mocks/films';
import SmallFilmCard from '../small-film-card/small-film-card';
import classNames from 'classnames';

type Props = {
  genre: string;
  currentFilmId: number;
};

function SimilarFilms({ genre, currentFilmId }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState(0);
  const filmsByGenre = films
    .filter((film) => film.genre === genre && film.id !== currentFilmId)
    .slice(0, 4)
    .map((film) => (
      <SmallFilmCard
        key={film.id}
        name={film.name}
        posterImage={film.posterImage}
        id={film.id}
        onActiveFilmsSet={setActiveFilm}
        videoLink={film.videoLink}
      />
    ));

  const isTitleVisible = filmsByGenre.length !== 0;
  return (
    <section className="catalog catalog--like-this">
      <h2
        className={classNames(
          // eslint-disable-next-line camelcase
          { catalog__title: isTitleVisible },
          { 'visually-hidden': !isTitleVisible },
        )}
      >
        More like this
      </h2>

      <div className="catalog__films-list">{filmsByGenre}</div>
    </section>
  );
}

export default SimilarFilms;
