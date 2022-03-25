import FilmsCatalog from '../films-catalog/films-catalog';
import Footer from '../footer/footer';
import PromoFilm from '../promo-film/promo-film';
import VisuallyHidden from '../visually-hidden/visually-hidden';

function MainPage() {
  return (
    <>
      <VisuallyHidden />
      <PromoFilm />
      <div className="page-content">
        <FilmsCatalog />
        <Footer />
      </div>
    </>
  );
}
export default MainPage;
