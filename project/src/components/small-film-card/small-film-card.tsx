import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/const';
import VideoPlayer from '../videoplayer/videoplayer';

type Props = {
  name: string;
  posterImage: string;
  id: number;
  onActiveFilmsSet: React.Dispatch<React.SetStateAction<number>>;
  videoLink: string;
};

function SmallFilmCard({
  name,
  posterImage,
  id,
  onActiveFilmsSet,
  videoLink,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  let timer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      videoRef.current?.play();
    }, 1000);
  };

  const handleMouseLeave = () => {
    videoRef.current?.load();
    clearTimeout(timer);
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer
          poster={posterImage}
          width="280"
          height="175"
          src={videoLink}
          videoRef={videoRef}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}
export default SmallFilmCard;
