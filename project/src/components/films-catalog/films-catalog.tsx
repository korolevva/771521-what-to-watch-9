import { useAppSelector } from '../../hooks';
import GenreList from '../genre-list/genre-list';
import ListFilms from '../list-films/list-films';
import Loader from '../loader/loader';

function FilmsCatalog() {
  const { isDataLoaded } = useAppSelector(({ FILMS }) => FILMS);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <Loader show={isDataLoaded}>
        <GenreList />
        <ListFilms />
      </Loader>
    </section>
  );
}

export default FilmsCatalog;
