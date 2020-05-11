import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  getUsers(): Observable<User[]> {

    return of([
      {username: 'pepe', password: 'peprez', id: 1},
        {username: 'raul', password: 'hernan', id: 2},
        {username: 'yoyo', password: 'sdf', id: 3},
        {username: 'sdf', password: 'sdf', id: 4}
      ]);
  }

  createUser(user: User): Observable<User> {
    return of({username: 'pepe', password: 'peprez', id: 6});
  }

  updateUser(user: User): Observable<User> {
    return of({username: 'pepe', password: 'peprez', id: 6});
  }

  removeUser(user: User): Observable<User> {

    return of({username: 'pepe', password: 'peprez', id: 6});
  }
}
