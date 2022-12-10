import SmallFilmCard from '../small-film-card/small-film-card';
import { film } from '../../types/film';

type FilmsListProps ={
  films: film[]
  genre: string
  filmId: number
}

function FilmsList({films, genre, filmId}:FilmsListProps) {
  return (
    <div className="catalog__films-list">
      {films.filter((filmData)=>filmData.id !== filmId && filmData.genre === genre).slice(0,4).map((filmData, id) => {
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

export default FilmsList;
