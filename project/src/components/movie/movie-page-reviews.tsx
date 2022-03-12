import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadCommentsAction } from '../../store/api-actions';
import Comment from '../comment/comment';
import Spinner from '../spinner/spinner';

function MoviePageReviews() {
  const dispatch = useAppDispatch();
  const { comments, isFetching } = useAppSelector(({ COMMENTS }) => COMMENTS);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(loadCommentsAction(id));
    }
  }, [dispatch, id]);

  if (comments.length === 0 || isFetching) {
    return <Spinner />;
  }

  const countCommentsInRightColumn =
    comments.length % 2 === 0
      ? comments.length / 2
      : Math.ceil(comments.length / 2);

  const leftColumnComments = comments.slice(0, countCommentsInRightColumn);
  const rightColumnComments = comments.slice(countCommentsInRightColumn);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {leftColumnComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {rightColumnComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
}

export default MoviePageReviews;
