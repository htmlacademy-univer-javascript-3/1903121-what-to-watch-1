import SmallFilmCard from '../small-film-card/small-film-card';
import { film } from '../../types/film';

type SimilarFilmsListProps ={
  films: film[]
}

function SimilarFilmsList({films}:SimilarFilmsListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((filmData, id) => {
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

export default SimilarFilmsList;
