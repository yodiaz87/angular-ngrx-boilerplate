import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<fromStore.UserState>) { }

  ngOnInit() {
    this.users$ = this.store.pipe(
      select(fromStore.selectAllUsers),
      tap( console.log)
    );
  }

}
