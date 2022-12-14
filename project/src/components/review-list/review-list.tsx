import ReviewColumn from '../review-column/review-column';
import { review } from '../../types/review';


type ReviewListProps = {
  reviews: review[]
}

function ReviewList({reviews}:ReviewListProps) {
  const halfReviews = Math.ceil(reviews.length / 2);
  const firstReviewColumn = reviews.filter((rev) => rev.id <= Math.ceil(halfReviews));
  const secondReviewColumn = reviews.filter((rev) => rev.id > Math.ceil(halfReviews));
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewColumn reviews = {firstReviewColumn}/>
      <ReviewColumn reviews = {secondReviewColumn}/>
    </div>
  );
}

export default ReviewList;
