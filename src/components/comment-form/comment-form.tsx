import { Fragment, ReactEventHandler, useState } from 'react';
import { useAppDispatch } from '../../store';
import { postCommentAction } from '../../store/api-actions';

type TypeChangeListener = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>
type ReviewFormProps = {
  offerId: string;
}

const rating = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' }
];

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const [review, setComment] = useState({ rating: 0, comment: '' });
  const listenerFormChange: TypeChangeListener = (event) => {
    const { name, value } = event.currentTarget;
    setComment({ ...review, [name]: value });
  };

  const dispatch = useAppDispatch();

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          rating.map(({ value, title }) => (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={listenerFormChange}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={listenerFormChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.comment.length < 50 || review.comment.length > 300 || review.rating === 0}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(postCommentAction({ review, offerId }));
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}


export default ReviewForm;
