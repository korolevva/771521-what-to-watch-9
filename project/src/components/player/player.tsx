import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loadFilmByIdAction } from '../../store/api-actions';
import Spinner from '../spinner/spinner';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import NotFoundPage from '../not-found-page/not-found-page';
import useVideoPlayer from '../../hooks/use-video-player';
import VisuallyHidden from '../visually-hidden/visually-hidden';
import { getError } from '../../store/film-process/selectors';
import { getFetchedFilmStatus } from '../../store/film-process/selectors';
import { getFilm } from '../../store/film-process/selectors';
dayjs.extend(duration);

function Player() {
  const error = useAppSelector(getError);
  const film = useAppSelector(getFilm);
  const isFetching = useAppSelector(getFetchedFilmStatus);
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleFullScreenClick,
    handleExitClick,
  } = useVideoPlayer(videoRef);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(loadFilmByIdAction(id));
    }
  }, [dispatch, id]);

  if (error) {
    return <NotFoundPage />;
  }

  if (isFetching || !film) {
    return <Spinner />;
  }

  const filmDuration = dayjs.duration(
    playerState.videoDuration || film.runTime,
    'seconds',
  );

  const formatedFilmDuration =
    filmDuration.asHours() >= 1
      ? filmDuration.format('-HH:mm:ss')
      : filmDuration.format('-mm:ss');
  return (
    <>
      <VisuallyHidden />
      <div className="player">
        <video
          ref={videoRef}
          className="player__video"
          poster={film.backgroundImage}
          onTimeUpdate={handleOnTimeUpdate}
        >
          <source src={film.videoLink} />
        </video>
        <button
          onClick={handleExitClick}
          type="button"
          className="player__exit"
        >
          Exit
        </button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                onChange={(evt) => handleVideoProgress(evt)}
                className="player__progress"
                value={playerState.progress}
                max="100"
              />
              <div
                className="player__toggler"
                style={{ left: `${playerState.progress}%` }}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">{formatedFilmDuration}</div>
          </div>
          <div className="player__controls-row">
            <button onClick={togglePlay} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                {playerState.isPlaying ? (
                  <use xlinkHref="#pause"></use>
                ) : (
                  <use xlinkHref="#play-s" />
                )}
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{film.name}</div>
            <button
              onClick={handleFullScreenClick}
              type="button"
              className="player__full-screen"
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Player;
