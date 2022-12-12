import {createAction} from '@reduxjs/toolkit';

export const switchGenre = createAction<string, string>('GenreFilmList/switchGenre');
export const viewGenreFilms = createAction('GenreFilmList/viewGenreFilms');
export const addMoreFilms = createAction('FilmList/addMoreFilms');
export const resetAddFilms = createAction('FilmList/resetAddFilms');
