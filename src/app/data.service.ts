import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    console.log('get Users data');
    return this.http.get('https://reqres.in/api/users');
  }

  test(){
    console.log('TEST data srvice');
  }

}
