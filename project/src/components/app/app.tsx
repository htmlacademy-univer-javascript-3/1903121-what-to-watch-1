import MainScreen from "../../pages/main-screen/main-screen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';

const FilmData = {
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: '2014'
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {
            <MainScreen
              filmTitle = {FilmData.FILM_TITLE}
              filmGenre = {FilmData.FILM_GENRE}
              filmYear = {FilmData.FILM_YEAR}
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
            <PrivateRoute authStatus={AuthStatus.NotAuth}>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Film}
          element = {<MoviePageScreen/>}
        />
        <Route
          path = {AppRoute.Player}
          element = {<PlayerScreen/>}
        />
        <Route
          path = {AppRoute.AddReview}
          element = {
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <AddReviewScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path = "*"
          element = {<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
