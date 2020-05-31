import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent implements OnInit {

  constructor(private store: Store<fromStore.UserState>) {}

  ngOnInit(): void {
  }

  onCreate(username: string, password: string) {
    // this.store.dispatch(new fromStore.CreateUser({username, password, id: 6}));
  }

}
