import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeGenre } from '../../store/films-process/films-process';
import { Genres } from '../../types/const';

function GenreList() {
  const { films, genre: selectedGenre } = useAppSelector(({ FILMS }) => FILMS);
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

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map(({ genre, id }, index) => (
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
