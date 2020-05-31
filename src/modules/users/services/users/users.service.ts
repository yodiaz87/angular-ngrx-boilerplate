import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../../models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {

   return of([
      {id: 1, code: 'code1', name: 'name1'},
      {id: 2, code: 'code2', name: 'name2'},
      {id: 3, code: 'code3', name: 'name3'},
      {id: 4, code: 'code4', name: 'name4'},
      {id: 5, code: 'code5', name: 'name5'},
      {id: 6, code: 'code6', name: 'name6'},
      {id: 7, code: 'code7', name: 'name7'},
      {id: 8, code: 'code8', name: 'name8'}
    ]);
  }
}

