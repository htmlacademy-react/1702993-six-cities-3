import { Fragment, ReactEventHandler, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { reviewActions, setStatusIdle } from '../../store/slices/comments-slice/comments-slice';
import { getCommentStatus } from '../../store/slices/comments-slice/comments-selectors';
import { CommentsStatus } from '../const';

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

  const SETTINGS = {
    minLength: 50,
    maxLength: 300
  };

  const [review, setComment] = useState({ rating: 0, comment: '' });
  const listenerFormChange: TypeChangeListener = (event) => {
    const { name, value } = event.currentTarget;
    setComment({ ...review, [name]: value });
  };

  const dispatch = useAppDispatch();
  const status = useAppSelector(getCommentStatus);

  useEffect(() => {
    if (status === CommentsStatus.Succes) {
      setComment({ rating: 0, comment: '' });
      setStatusIdle();
    }
  }, [status]);

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
                checked={value === Number(review.rating)}
                type="radio"
                onChange={listenerFormChange}
                disabled={status === CommentsStatus.Pending}
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
        value={review.comment}
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={listenerFormChange}
        disabled={status === CommentsStatus.Pending}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          {
            status === CommentsStatus.Failed && 'Failed to send comment, please try again. '
          }
          To submit review please make sure to set <span className="reviews__star"> rating</span> and describe your stay with at least <b className="reviews__text-amount"> {SETTINGS.minLength} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.comment.length < SETTINGS.minLength || review.comment.length > SETTINGS.maxLength || review.rating === 0 || status === CommentsStatus.Pending}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(reviewActions.postCommentAction({ review, offerId }));
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}


export default ReviewForm;
