import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http_: HttpClient 
  ){}

  // public get_user(url: string){
  //   return this.http_.get(url);
  // }

  public create(user: User){
    return this.http_.post('equipo12:equipo12@172.16.130.61:27017/Proyecto', user); // Poner ip de la bbdd: return this.http_.post('http://175.16.114.10:3000/users', user);
  }

  public delete(user: User){
    return this.http_.delete('/users' + user.username); // Poner ip de la bbdd: return this.http_.delete('http://175.16.114.10:3000/users' + user.id_);
  }

  public update(user: User){
    return this.http_.put('/users' + user.username, user); // Poner ip de la bbdd: return this.http_.put('http://175.16.114.10:3000/users' + user.id_, user);
  }

  public get_users(){
    return this.http_.get('equipo12:equipo12@172.16.130.61:27017/Proyecto'); // Poner ip de la bbdd: return this.http_.get_users('http://175.16.114.10:3000/users');
  }

  public get_user(user: User){
    return this.http_.get('/users' + user.username); // Poner ip de la bbdd: return this.http_.get_user('http://175.16.114.10:3000/users' + user.id_);
  }
}
