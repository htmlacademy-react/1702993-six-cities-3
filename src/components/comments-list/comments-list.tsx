import { Comment } from '../../types/comment';
import CommentsItem from '../comments-item/comments-item';
import { MAX_COMMENTS_COUNT } from '../const';

type CommentsListProps = {
  comments: Comment[];
}

function CommentsList({comments}: CommentsListProps): JSX.Element {

  const sortedComments = [...comments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, MAX_COMMENTS_COUNT);

  return (
    <ul className="reviews__list">
      {
        sortedComments.map((comment) =>
          (
            <CommentsItem
              key={comment.id}
              comment={comment}
            />
          ))
      }
    </ul>
  );
}

export default CommentsList;
