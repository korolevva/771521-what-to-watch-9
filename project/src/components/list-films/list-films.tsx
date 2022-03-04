import { useEffect, useState } from 'react';
import { Genres } from '../../types/const';
import { Film } from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type Props = {
  films: Film[];
  genre: string;
};

function ListFilms({ films, genre }: Props) {
  const [activeFilm, setActiveFilm] = useState(0);
  const [showFilmsCount, setShowFilmsCount] = useState(8);
  useEffect(() => {
    setShowFilmsCount(8);
  }, [genre]);

  // eslint-disable-next-line no-console
  console.log(activeFilm);
  const filtredFilmsByGenre =
    genre === Genres.AllGenres
      ? films
      : films.filter((film) => film.genre === genre);

  const filmList = filtredFilmsByGenre.slice(0, showFilmsCount);

  const handleShowMoreCLick = () => {
    setShowFilmsCount(showFilmsCount + 8);
  };

  return (
    <>
      <div className="catalog__films-list">
        {filmList.map((film) => (
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
      {!(filtredFilmsByGenre.length - showFilmsCount < 0) && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={handleShowMoreCLick}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}
export default ListFilms;
