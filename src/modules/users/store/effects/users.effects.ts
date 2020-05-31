import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { fromUserActions } from '../actions';
import { UserService } from '../../services';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((res: any) =>
            fromUserActions.loadUsersSuccess({
              users: res
            })
          ),
          catchError(error =>
            of(
              fromUserActions.loadUsersFail({
                error
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
