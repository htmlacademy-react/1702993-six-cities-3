import CommentsItem from '../comments-item/comments-item';
import { TOfferPage } from '../../types/TOfferPage';
import { comments } from '../../mocks/comments';

type CommentsListProps = {
  offer: TOfferPage;
}

function CommentsList({ offer }: CommentsListProps) {

  return (
    <ul className="reviews__list">
      {
        comments.filter((comment) => comment.id === offer.id).map((comment) =>
          (
            <CommentsItem
              key={comment.comment}
              comment={comment}
            />
          ))
      }
    </ul>
  );
}

export default CommentsList;
