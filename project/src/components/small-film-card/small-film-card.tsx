import { useState } from 'react';
import { Link } from 'react-router-dom';
import { film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  filmData: film
}

function SmallFilmCard({filmData}:SmallFilmCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  let timerId: NodeJS.Timeout;
  const showVideo = () => {
    timerId = setTimeout(()=>{
      setIsPlaying(true);
    }, 1000);
  };
  const stopVideo = () => {
    clearTimeout(timerId);
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver = {showVideo}
      onMouseOut = {stopVideo}
    >
      <div className="small-film-card__image">
        <VideoPlayer filmData={filmData} isPlaying={isPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmData.id}`}>
          {filmData.name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
