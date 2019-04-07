import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {User} from './models/user';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/list`);
  }

  getUserDetails(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  // updateUser(): Observable<User> {
  //   return this.http.patch<User>(`${environment.apiUrl}/users`);
  // }
}
