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
import { film } from '../../types/film';
import { addReview, review } from '../../types/review';
import MoviePageDetailsScreen from '../../pages/movie-page-details-screen/movie-page-details-screen';
import MoviePageReviewsScreen from '../../pages/movie-page-reviews-screen/movie-page-reviews-screen';

type AppScreenProps = {
  films: film[]
  reviews: review[]
}

function App({films, reviews}:AppScreenProps ): JSX.Element {
  return (
    <BrowserRouter>
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
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <MyListScreen
                films = {films}
              />
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Film}
          element = {<MoviePageScreen films={films}/>}
        />
        <Route
          path = {AppRoute.FilmDetails}
          element = {<MoviePageDetailsScreen films={films}/>}
        />
        <Route
          path = {AppRoute.FilmReviews}
          element = {<MoviePageReviewsScreen films={films} reviews={reviews}/>}
        />
        <Route
          path = {AppRoute.Player}
          element = {<PlayerScreen films = {films}/>}
        />
        <Route
          path = {AppRoute.AddReview}
          element = {
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <AddReviewScreen
                films = {films}
                onReview={({rating, comment}:addReview) => {
                  throw new Error(`${rating}, ${comment}`);
                }}
              />
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
