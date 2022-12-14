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

const isCheckedAuth = (authStatus: AuthStatus): boolean => authStatus === AuthStatus.Unknown;

function App(): JSX.Element {
  const {authStatus, isDataLoaded} = useAppSelector((state) => state);
  const {films} = useAppSelector((state) => state);
  const filmData = useAppSelector((state)=> state.film);

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
              <MyListScreen
                films = {films}
                addFilmsAmount = {films.length}
              />
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
          element = {<PlayerScreen films = {films}/>}
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
