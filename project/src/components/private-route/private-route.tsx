import { Navigate, RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../types/const';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
