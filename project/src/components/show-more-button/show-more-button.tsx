import { useAppDispatch } from '../../hooks';
import { addMoreFilms } from '../../store/actions';

function ShowMoreButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more" onClick={() => {dispatch(addMoreFilms());}}>
      <button className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
