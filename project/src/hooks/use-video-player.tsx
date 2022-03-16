import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useVideoPlayer = (videoElement: React.RefObject<HTMLVideoElement>) => {
  const navigate = useNavigate();
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    videoDuration: videoElement.current?.duration,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    if (videoElement && videoElement.current) {
      playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
    }
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    if (videoElement && videoElement.current) {
      const progress =
        (videoElement.current.currentTime / videoElement.current.duration) *
        100;
      setPlayerState({
        ...playerState,
        videoDuration:
          videoElement.current.duration - videoElement.current.currentTime,
        progress,
      });
    }
  };

  const handleVideoProgress = (evt: React.FormEvent<HTMLProgressElement>) => {
    if (videoElement && videoElement.current) {
      const target = evt.target as HTMLProgressElement;
      const manualChange = Number(target.value);
      videoElement.current.currentTime =
        (videoElement.current.duration / 100) * manualChange;
      setPlayerState({
        ...playerState,
        progress: manualChange,
      });
    }
  };

  const handleFullScreenClick = () => {
    if (videoElement && videoElement.current) {
      videoElement.current.requestFullscreen();
    }
  };

  const handleExitClick = () => {
    navigate(-1);
  };

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleFullScreenClick,
    handleExitClick,
  };
};

export default useVideoPlayer;
