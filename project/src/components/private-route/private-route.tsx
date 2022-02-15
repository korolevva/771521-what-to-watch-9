import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../types/const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
