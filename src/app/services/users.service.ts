import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<User[]>('https://my.api.mockaroo.com/usuarios.json?key=a26b2940')

  }
}
