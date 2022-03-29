import { useAppSelector } from '../../hooks/hooks';
import { getLoadedFilmsStatus } from '../../store/films-process/selectors';
import { getFilmsFetchingError } from '../../store/films-process/selectors';
import GenreList from '../genre-list/genre-list';
import ListFilms from '../list-films/list-films';
import Loader from '../loader/loader';

function FilmsCatalog() {
  const isDataLoaded = useAppSelector(getLoadedFilmsStatus);
  const error = useAppSelector(getFilmsFetchingError);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Loader show={isDataLoaded}>
        {!error ? (
          <>
            <GenreList />
            <ListFilms />
          </>
        ) : (
          <p>Ошибка загрузки данных</p>
        )}
      </Loader>
    </section>
  );
}

export default FilmsCatalog;
