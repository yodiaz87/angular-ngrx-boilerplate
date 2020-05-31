import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFail = '[User] Load Users Fail'
}

export const loadUsers = createAction(UserActionTypes.LoadUsers);
export const loadUsersSuccess = createAction(
  UserActionTypes.LoadUsersSuccess,
  props<{ users: User[] }>()
);

export const loadUsersFail = createAction(
  UserActionTypes.LoadUsersFail,
  props<{ error: Error | any }>()
);

export const fromUserActions = {
  loadUsers,
  loadUsersFail,
  loadUsersSuccess
};
