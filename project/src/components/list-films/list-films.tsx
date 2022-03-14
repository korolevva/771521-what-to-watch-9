import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Genres } from '../../types/const';
import SmallFilmCard from '../small-film-card/small-film-card';

function ListFilms() {
  const { films, genre } = useAppSelector(({ FILMS }) => FILMS);
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

  const smallFilmCards = useMemo(
    () =>
      filmList.map((film) => (
        <SmallFilmCard
          key={film.id}
          name={film.name}
          posterImage={film.previewImage}
          id={film.id}
          onActiveFilmsSet={setActiveFilm}
          videoLink={film.previewVideoLink}
        />
      )),
    [filmList],
  );

  return (
    <>
      <div className="catalog__films-list">{smallFilmCards}</div>
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
