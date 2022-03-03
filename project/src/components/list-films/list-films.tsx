import { useState } from 'react';
import { Genres } from '../../types/const';
import { Film } from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type Props = {
  films: Film[];
  genre: string;
};

function ListFilms({ films, genre }: Props) {
  const [activeFilm, setActiveFilm] = useState(0);
  // eslint-disable-next-line no-console
  console.log(activeFilm);
  const filtredFilmsByGenre =
    genre === Genres.AllGenres
      ? films
      : films.filter((film) => film.genre === genre);

  return (
    <div className="catalog__films-list">
      {filtredFilmsByGenre.map((film) => (
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
