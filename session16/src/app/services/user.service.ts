import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  commonUrl = 'http://localhost:3000/'
  constructor(private _http:HttpClient) { }

  registerUser(userObj:any):Observable<any>{
    return this._http.post(`${this.commonUrl}register`, userObj)
  }

  getImages():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
  }
}
