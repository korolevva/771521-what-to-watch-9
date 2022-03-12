import classNames from 'classnames';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/films-process/films-process';
import { Genres } from '../../types/const';
import { Film } from '../../types/film';

type Props = {
  films: Film[];
  selectedGenre: string;
};

function GenreList({ films, selectedGenre }: Props) {
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
