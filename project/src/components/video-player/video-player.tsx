import { useEffect, useRef } from 'react';
import { film } from '../../types/film';

type VideoPlayerProps = {
  filmData: film
  isPlaying: boolean
}

function VideoPlayer({filmData, isPlaying}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.src = filmData.previewVideoLink;
      videoRef.current.play();
      return;
    }

    if (!isPlaying) {
      videoRef.current.src = '';
    }
  }, [filmData.previewVideoLink, isPlaying]);


  return (
    <video width="280" height="175" poster={filmData.previewImage} ref={videoRef} muted/>
  );
}

export default VideoPlayer;
