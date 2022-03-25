import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../types/const';
import AddReview from '../add-review/add-review';
import MainPage from '../main-page/main-page';
import MyList from '../my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../../hocs/private-route/private-route';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import Movie from '../movie/movie';
import { checkAuthAction, loadFilmsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { store } from '../../store';

store.dispatch(checkAuthAction());

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadFilmsAction());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Film}>
        <Route path=":id/*" element={<Movie />} />
        <Route
          path=":id/review"
          element={
            <PrivateRoute>
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
