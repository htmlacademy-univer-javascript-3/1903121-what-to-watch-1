import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthStatus } from '../const';

export const redirectToRoute = createAction<AppRoute>('cinema/redirectToRoute');
