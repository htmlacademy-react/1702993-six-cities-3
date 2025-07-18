import { Comment } from '../../types/comment';
import { MONTHS_LIST } from '../const';
type CommentsItemProps = {
  comment: Comment;
}

function CommentsItem({ comment }: CommentsItemProps): JSX.Element {
  const commentsRatingWidth = comment.rating * 20;
  const date = new Date(comment.date);
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${commentsRatingWidth}%` }}></span>
            <span className="visually-hidden">{comment.rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={`${year}-${month}-${day}`}>{`${MONTHS_LIST[month]} ${year}`}</time>
      </div>
    </li>
  );
}

export default CommentsItem;
