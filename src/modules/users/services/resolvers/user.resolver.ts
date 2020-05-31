import { UserPartialState, selectUserLoaded, fromUserActions } from '../../store';
import {Resolve} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';


@Injectable(
  {
    providedIn: 'root'
  }
)

export class UserResolver implements Resolve<boolean> {
  constructor(private store: Store<UserPartialState>) {}

  resolve(): Observable<boolean> {
    const loaded$ = this.store.pipe(select(selectUserLoaded));

    return loaded$.pipe(
      filter(loaded => {
        if (loaded === false) {
          this.store.dispatch(fromUserActions.loadUsers());
        }

        return loaded;
      }),
      take(1)
    );
  }
}
