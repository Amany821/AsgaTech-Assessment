import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/Environment';
import { UsersModel } from 'src/models/user/UsersModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUpdated = new EventEmitter<any>();

  constructor(
    private httpClient: HttpClient
  ) { }

  onGetAllUsers(): Observable<UsersModel[]> {
    return this.httpClient.get<UsersModel[]>(`${Environment.baseUrl}users.json`);
  }
}
