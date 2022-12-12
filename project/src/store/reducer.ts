import {createReducer} from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import {addMoreFilms, resetAddFilms, switchGenre, viewGenreFilms} from './actions';

const initialState = {
  genre: 'all',
  films: films,
  addFilmsAmount: 8
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchGenre, (state, {payload}) => {
      state.genre = payload;
    })
    .addCase(viewGenreFilms, (state) => {
      state.films = films;
      {state.genre === 'all' ? state.films = films : state.films = films.filter((film)=>film.genre === state.genre);}
      {state.genre === 'all' ? state.films = films : state.films = films.filter((film) => film.genre === state.genre);}
    })
    .addCase(addMoreFilms, (state) => {
      state.addFilmsAmount += 8;
    })
    .addCase(resetAddFilms, (state) => {
      state.addFilmsAmount = 8;
    });
});

export {reducer};
