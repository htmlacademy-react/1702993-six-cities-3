import CommentsItem from '../comments-item/comments-item';
import { TypeComments } from '../../types/TypeComments';
import { Fragment } from 'react';
import { TOfferPage } from '../../types/TOfferPage';
type CommentsListProps = {
  comments: TypeComments[];
  offer: TOfferPage;
}

function CommentsList({ comments, offer }: CommentsListProps) {

  return (
    <Fragment>
      {
        comments.filter((comment) => comment.id === offer.id).map((comment) =>
        (<CommentsItem
          key={comment.id}
          comment={comment}
        />))
      }
    </Fragment>
  );
}

export default CommentsList;
