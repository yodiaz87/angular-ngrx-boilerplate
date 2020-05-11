import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUsers from './users.reducer';

export interface State {
  users: fromUsers.UserState;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUsers.reducer
};

export const getUsersState = createFeatureSelector<State>(
  'users'
);
