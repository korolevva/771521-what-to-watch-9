import { useState } from 'react';
import { Film } from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type Props = {
  films: Film[];
};

function ListFilms({ films }: Props) {
  const [activeFilm, setActiveFilm] = useState(0);
  // eslint-disable-next-line no-console
  console.log(activeFilm);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          name={film.name}
          posterImage={film.posterImage}
          id={film.id}
          onActiveFilmsSet={setActiveFilm}
          videoLink={film.videoLink}
        />
      ))}
    </div>
  );
}
export default ListFilms;
