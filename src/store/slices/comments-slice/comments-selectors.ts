import { CommentsStatus, NameSpace } from '../../../components/const';
import { State } from '../../../types/state';
import { Comment } from '../../../types/comment';

export const getComments = (state: State): Comment[] => state[NameSpace.Reviews].comments;
export const getCommentStatus = (state: State): CommentsStatus => state[NameSpace.Reviews].status;
