import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(private _userService:UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let token = localStorage.getItem('token')
    if(token){
      this._userService.userStatus=true
      localStorage.setItem('userStatus', 'true')
      request = request.clone(
        {
          headers: request.headers.set(
            'Authorization',
             token
             )
        }
      )
    }
    return next.handle(request);
  }
}
