import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { fromUserActions } from '../actions';
import { User } from '../../models/user.model';

export const userFeatureKey = 'user';

export interface UserState extends EntityState<User> {
  loaded: boolean;
  error?: Error | any;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  // In this case this would be optional since primary key is id
  selectId: item => item.id
});

export interface UserPartialState {
  readonly [userFeatureKey]: UserState;
}

export const initialState: UserState = adapter.getInitialState({
  // Additional user state properties
  loaded: false,
  error: null
});

const reducerHandler = createReducer(
  initialState,
  on(fromUserActions.loadUsersSuccess, (state, { users }) => {
    return adapter.setAll(users, {
      ...state,
      loaded: true
    });
  }),
  on(fromUserActions.loadUsersFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  })
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducerHandler(state, action);
}
