import ReviewForm from '../../components/review-form/review-form';
import { film } from '../../types/film';
import { addReview } from '../../types/review';
import UserBlock from '../../components/user-block/user-block';
import { Link } from 'react-router-dom';

type AddReviewProps = {
  filmData: film
}

function AddReviewScreen({filmData}:AddReviewProps) {

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmData.backgroundImage} alt={filmData.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmData.id}`} className="breadcrumbs__link">{filmData.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={''}>Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={filmData.posterImage}
            alt={filmData.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm id={filmData.id}/>
      </div>
    </section>
  );
}

export default AddReviewScreen;
