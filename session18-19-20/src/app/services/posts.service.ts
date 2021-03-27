import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  commonApiUrl = 'http://localhost:3000'
  constructor(private _http:HttpClient) { }

  addPost(postData):Observable<any>{
    return this._http.post(`${this.commonApiUrl}/addPost`,postData)
  }
  getUserPosts():Observable<any>{
    return this._http.get(`${this.commonApiUrl}/posts`)
  }

}
