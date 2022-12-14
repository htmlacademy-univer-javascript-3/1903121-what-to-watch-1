import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthStatus } from '../const';
import { film } from '../types/film';
import { review } from '../types/review';

export const switchGenre = createAction<string, string>('GenreFilmList/switchGenre');
export const addMoreFilms = createAction('FilmList/addMoreFilms');
export const resetAddFilms = createAction('FilmList/resetAddFilms');
export const loadFilms = createAction<film[]>('data/loadFilms');
export const requireAuth = createAction<AuthStatus>('user/requireAuth');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const loadPromo = createAction<film>('data/loadPromo');
export const loadReviews = createAction<review[]>('data/loadReview');
export const addReviews = createAction<review>('data/addReview');
export const loadFilm = createAction<film>('data/loadFilm');
export const loadSimilarFilms = createAction<film[]>('data/loadSimilarFilms');
export const redirectToRoute = createAction<AppRoute>('cinema/redirectToRoute');
export const postReview = createAction<review>('data/postReview');
