import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { sendCommentAction } from '../../store/api-actions';
import { getLoadedSendingCommentData } from '../../store/sending-comment-process/selectors';
import { getCommentSendingStatus } from '../../store/sending-comment-process/selectors';
import { AppRoute, CommentSendingStatus } from '../../types/const';

const MIN_MESSAGE_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 400;

function AddReviewForm() {
  const [reviewMessage, setReviewMessage] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const isFetching = useAppSelector(getLoadedSendingCommentData);
  const commentSendingStatus = useAppSelector(getCommentSendingStatus);

  const isMessageEntered =
    reviewMessage.length >= MIN_MESSAGE_LENGTH &&
    reviewMessage.length <= MAX_MESSAGE_LENGTH;

  const isRatingSelected = rating.length !== 0;

  const isValidForm = isMessageEntered && isRatingSelected;

  useEffect(() => {
    if (commentSendingStatus === CommentSendingStatus.Success) {
      navigate(`${AppRoute.Film}/${id}`);
    }
  }, [id, navigate, commentSendingStatus]);

  const handleReviewChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setReviewMessage(value);
  };

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (id) {
      dispatch(sendCommentAction({ reviewMessage, rating, id }));
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div
            style={{
              pointerEvents: isFetching ? 'none' : 'auto',
            }}
            className="rating__stars"
            onChange={handleRatingChange}
          >
            <input
              className="rating__input"
              id="star-10"
              type="radio"
              name="rating"
              value="10"
            />
            <label className="rating__label" htmlFor="star-10">
              Rating 10
            </label>

            <input
              className="rating__input"
              id="star-9"
              type="radio"
              name="rating"
              value="9"
            />
            <label className="rating__label" htmlFor="star-9">
              Rating 9
            </label>

            <input
              className="rating__input"
              id="star-8"
              type="radio"
              name="rating"
              value="8"
            />
            <label className="rating__label" htmlFor="star-8">
              Rating 8
            </label>

            <input
              className="rating__input"
              id="star-7"
              type="radio"
              name="rating"
              value="7"
            />
            <label className="rating__label" htmlFor="star-7">
              Rating 7
            </label>

            <input
              className="rating__input"
              id="star-6"
              type="radio"
              name="rating"
              value="6"
            />
            <label className="rating__label" htmlFor="star-6">
              Rating 6
            </label>
            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              value="5"
            />
            <label className="rating__label" htmlFor="star-5">
              Rating 5
            </label>
            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              value="4"
            />
            <label className="rating__label" htmlFor="star-4">
              Rating 4
            </label>
            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              value="3"
            />
            <label className="rating__label" htmlFor="star-3">
              Rating 3
            </label>
            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              value="2"
            />
            <label className="rating__label" htmlFor="star-2">
              Rating 2
            </label>
            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              value="1"
            />
            <label className="rating__label" htmlFor="star-1">
              Rating 1
            </label>
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            style={{
              pointerEvents: isFetching ? 'none' : 'auto',
            }}
            onChange={handleReviewChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewMessage}
            maxLength={MAX_MESSAGE_LENGTH}
            minLength={MIN_MESSAGE_LENGTH}
          />
          <div className="add-review__submit">
            <button
              style={{
                opacity: isValidForm ? '1' : '0.3',
                pointerEvents: isValidForm && !isFetching ? 'auto' : 'none',
              }}
              onClick={handleButtonClick}
              className="add-review__btn"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
