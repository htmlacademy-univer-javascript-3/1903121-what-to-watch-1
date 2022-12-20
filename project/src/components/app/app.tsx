import MainScreen from '../../pages/main-screen/main-screen';
import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { getAuthStatus } from '../../store/user-process/selectors';
import { getFilms, getLoadedDataStatus } from '../../store/data-process/selectors';
import { getFilm } from '../../store/film-process/selectors';

const isCheckedAuth = (authStatus: AuthStatus): boolean => authStatus === AuthStatus.Unknown;

function App(): JSX.Element {
  const films = useAppSelector(getFilms);
  const filmData = useAppSelector(getFilm);
  const authStatus = useAppSelector(getAuthStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isCheckedAuth(authStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {
            <MainScreen
              films = {films}
            />
          }
        />
        <Route
          path = {AppRoute.SignIn}
          element = {<SignInScreen/>}
        />
        <Route
          path = {AppRoute.MyList}
          element = {
            <PrivateRoute authStatus={authStatus}>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Film}
          element = {<MoviePageScreen/>}
        />
        <Route
          path = {AppRoute.FilmDetails}
          element = {<MoviePageScreen/>}
        />
        <Route
          path = {AppRoute.FilmReviews}
          element = {<MoviePageScreen/>}
        />
        <Route
          path = {AppRoute.Player}
          element = {<PlayerScreen filmData = {filmData}/>}
        />
        <Route
          path = {AppRoute.AddReview}
          element = {
            <PrivateRoute authStatus={authStatus}>
              <AddReviewScreen
                filmData = {filmData}
              />
            </PrivateRoute>
          }
        />
        <Route
          path = "*"
          element = {<NotFoundScreen/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
