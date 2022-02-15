import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../types/const';
import AddReview from '../add-review/add-review';
import MainPage from '../main-page/main-page';
import MyList from '../my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import MoviePage from '../movie-page/movie-page';
// import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

type Props = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
};

function App({ filmCardTitle, filmCardGenre, filmCardYear }: Props) {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={
          <MainPage
            filmCardTitle={filmCardTitle}
            filmCardGenre={filmCardGenre}
            filmCardYear={filmCardYear}
          />
        }
      />
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
        <Route path=":id" element={<MoviePage />} />
        <Route
          path=":id/review"
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReview />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={AppRoute.Play}>
        <Route path=":id" element={<Player />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
