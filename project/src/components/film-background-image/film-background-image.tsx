import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../types/const';
import { Film } from '../../types/film';

type Props = {
  film: Film;
};
function FilmBackgroundImage({ film }: Props) {
  const { authorizationStatus } = useAppSelector(({ AUTH }) => AUTH);
  return authorizationStatus === AuthorizationStatus.Auth ? (
    <div className="film-card__bg">
      <img src={film.backgroundImage} alt={film.name} />
    </div>
  ) : (
    <div className="film-card__bg">
      <img src="img/bg-header.jpg" />
    </div>
  );
}

export default FilmBackgroundImage;
