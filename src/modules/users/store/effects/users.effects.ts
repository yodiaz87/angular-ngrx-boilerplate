import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../app/store';
import * as userActions from '../actions/users.actions';
import * as fromServices from '../../services';
import { User } from '../../models/user.model';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: fromServices.UsersService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(userActions.LOAD_USERS),
    switchMap(() => {
      return this.userService
        .getUsers()
        .pipe(
          map((users: User[]) => new userActions.LoadUsersSuccess(users)),
          catchError(error => of(new userActions.LoadUsersFail(error)))
        );
    })
  );

  @Effect()
  createUser$ = this.actions$.pipe(
    ofType(userActions.CREATE_USER),
    map((action: userActions.CreateUser) => action.payload),
    switchMap(user => {
      return this.userService
        .createUser(user)
        .pipe(
          map((userResponse: User) => new userActions.CreateUserSuccess(userResponse)),
          catchError(error => of(new userActions.CreateUserFail(error)))
        );
    })
  );

  @Effect()
  createUserSuccess$ = this.actions$.pipe(
    ofType(userActions.CREATE_USER_SUCCESS),
      map((action: userActions.CreateUserSuccess) => action.payload),
      map(user => {
        return  fromRoot.go({
          path: ['/users'],
        });
      })
    );

  @Effect()
  updateUser$ = this.actions$.pipe(
    ofType(userActions.UPDATE_USER),
    map((action: userActions.UpdateUser) => action.payload),
    switchMap((user: User) => {
      return this.userService
        .updateUser(user)
        .pipe(
          map((userResponse: User) => new userActions.UpdateUserSuccess(userResponse)),
          catchError(error => of(new userActions.UpdateUserFail(error)))
        );
    })
  );

  @Effect()
  removeUser$ = this.actions$.pipe(
    ofType(userActions.REMOVE_USER),
    map((action: userActions.RemoveUser) => action.payload),
    switchMap(user => {
      return this.userService
        .removeUser(user)
        .pipe(
          map(() => new userActions.RemoveUserSuccess(user)),
          catchError(error => of(new userActions.RemoveUserFail(error)))
        );
    })
  );

  @Effect()
  handleUserSuccess$ = this.actions$
    .pipe(
      ofType(
      userActions.UPDATE_USER_SUCCESS,
      userActions.REMOVE_USER_SUCCESS
    ),
      map(user => {
        return fromRoot.go({
          path: ['/users'],
        });
      })
    );
}
