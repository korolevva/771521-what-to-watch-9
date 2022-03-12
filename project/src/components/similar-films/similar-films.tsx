import { useEffect, useState } from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadSimilarFilmsAction } from '../../store/api-actions';

type Props = {
  genre: string;
  currentFilmId: number;
};

function SimilarFilms({ genre, currentFilmId }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState(0);
  const { films } = useAppSelector(({ FILMS }) => FILMS);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (films.length === 0) {
      dispatch(loadSimilarFilmsAction(String(currentFilmId)));
    }
  }, [dispatch, films.length, currentFilmId]);

  const filmsByGenre = films
    .filter((film) => film.genre === genre && film.id !== currentFilmId)
    .slice(0, 4)
    .map((film) => (
      <SmallFilmCard
        key={film.id}
        name={film.name}
        posterImage={film.previewImage}
        id={film.id}
        onActiveFilmsSet={setActiveFilm}
        videoLink={film.previewVideoLink}
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
