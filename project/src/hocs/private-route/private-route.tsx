import { Navigate, RouteProps, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../types/const';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authorizationStatus } = useAppSelector(({ AUTH }) => AUTH);
  const location = useLocation();
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} state={{ prevRoute: location.pathname }} />
  );
}

export default PrivateRoute;
