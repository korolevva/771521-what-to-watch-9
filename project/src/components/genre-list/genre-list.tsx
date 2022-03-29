import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeGenre } from '../../store/films-process/films-process';
import { getFilms, getGenreFilms } from '../../store/films-process/selectors';
import { Genres } from '../../types/const';

const FILM_CARD_COUNT_ON_PAGE = 10;
const BEGIN = 0;

function GenreList() {
  const selectedGenre = useAppSelector(getGenreFilms);
  const films = useAppSelector(getFilms);
  const dispatch = useAppDispatch();
  const genres = films.map((film) => film.genre);
  const uniqueGenres = [Genres.AllGenres, ...Array.from(new Set(genres))].map(
    (genre, index) => ({
      id: index,
      genre,
    }),
  );

  const handleGenreClick = (
    evt: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    const genre = evt.currentTarget.children[0].innerHTML;
    dispatch(changeGenre({ genre }));
  };

  const filmList = uniqueGenres.slice(BEGIN, FILM_CARD_COUNT_ON_PAGE);

  return (
    <ul className="catalog__genres-list">
      {filmList.map(({ genre, id }) => (
        <li
          key={id}
          className={classNames('catalog__genres-item', {
            'catalog__genres-item--active': genre === selectedGenre,
          })}
          onClick={handleGenreClick}
        >
          <a className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
