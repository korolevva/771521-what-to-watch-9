import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../types/const';
import AddReview from '../add-review/add-review';
import MainPage from '../main-page/main-page';
import MyList from '../my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import { Film } from '../../types/film';
import Movie from '../movie/movie';

type Props = {
  films: Film[];
};

function App({ films }: Props) {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage films={films} />} />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Film}>
        <Route path=":id/*" element={<Movie />} />
        <Route
          path=":id/review"
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReview />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={`${AppRoute.Play}/:id`} element={<Player />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
