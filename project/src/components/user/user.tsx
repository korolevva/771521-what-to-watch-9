import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../types/const';

function User() {
  const { user } = useAppSelector(({ USER }) => USER);
  const { authorizationStatus } = useAppSelector(({ AUTH }) => AUTH);
  const dispatch = useAppDispatch();
  const handleSignoutClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  const prevRoute = useLocation();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <Link to={AppRoute.MyList}>
            <div className="user-block__avatar">
              {user && (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  width="63"
                  height="63"
                />
              )}
            </div>
          </Link>
        ) : (
          <Link to={AppRoute.SignIn} className="user-block__link"></Link>
        )}
      </li>
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth && User ? (
          <a className="user-block__link" onClick={handleSignoutClick}>
            Sign out
          </a>
        ) : (
          <Link
            to={AppRoute.SignIn}
            state={{ prevRoute }}
            className="user-block__link"
          >
            Sign in
          </Link>
        )}
      </li>
    </ul>
  );
}

export default User;
