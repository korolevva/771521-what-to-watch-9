import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../types/const';
import Logo from '../logo/logo';

function Header() {
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const dispatch = useAppDispatch();

  const handleSignoutClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const prevRoute = useLocation();

  return (
    <header className="page-header film-card__head">
      <Logo />

      <ul className="user-block">
        <li className="user-block__item">
          {authorizationStatus === AuthorizationStatus.Auth ? (
            <Link to={AppRoute.MyList}>
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </Link>
          ) : (
            <Link to={AppRoute.SignIn} className="user-block__link"></Link>
          )}
        </li>
        <li className="user-block__item">
          {authorizationStatus === AuthorizationStatus.Auth ? (
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
    </header>
  );
}

export default Header;
