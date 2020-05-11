import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadUsers())
    this.users$ = this.store.pipe(select(fromStore.getAllUsers));
  }

}
