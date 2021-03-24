import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  commonApiUrl = "http://localhost:3000"
  constructor(private _http: HttpClient) { }
  loginUser(userLoginData: any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}/login`, userLoginData)
  }
}
