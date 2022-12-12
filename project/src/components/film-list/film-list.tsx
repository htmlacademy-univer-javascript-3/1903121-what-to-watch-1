import SmallFilmCard from '../small-film-card/small-film-card';
import { film } from '../../types/film';

type FilmListProps ={
  films: film[]
  addFilmsAmount:number
}

function FilmList({films, addFilmsAmount}:FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.slice(0, addFilmsAmount).map((filmData, id) => {
        const keyValue = `${id}-${filmData.name}`;
        return (
          <SmallFilmCard
            filmData={filmData}
            key={keyValue}
          />
        );
      })}
    </div>
  );
}

export default FilmList;
