import ReviewColumn from '../review-column/review-column';
import { review } from '../../types/review';


type ReviewListProps = {
  reviews: review[]
}

function ReviewList({reviews}:ReviewListProps) {
  const halfReviews = Math.floor(reviews.length / 2);
  const firstReviewColumn = reviews.filter((review) => review.user.id <= Math.ceil(halfReviews));
  const secondReviewColumn = reviews.filter((review) => review.user.id > Math.ceil(halfReviews));
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewColumn reviews = {firstReviewColumn}/>
      <ReviewColumn reviews = {secondReviewColumn}/>
    </div>
  );
}

export default ReviewList;
