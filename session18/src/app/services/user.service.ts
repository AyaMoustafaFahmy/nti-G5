import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userStatus=localStorage.getItem('userStatus')||false
  
  commonApiUrl = "http://localhost:3000"

  constructor(private _http: HttpClient) { }

  registerUser(userData:any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}/register`,userData)
  }
  
  loginUser(userLoginData: any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}/login`, userLoginData)
  }

  logoutUser():Observable<any>{
    return this._http.post(`${this.commonApiUrl}/logout`, null)
  }
  activateUser(id):Observable<any>{
    return this._http.get(`${this.commonApiUrl}/activate/${id}`)
  }
  
  profile():Observable<any>{
    return this._http.get(`${this.commonApiUrl}/myProfile`)
  }

}
