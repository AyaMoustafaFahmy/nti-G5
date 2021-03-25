import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData : any = {
    "fname":"",
    "lname":"",
    "phone":"",
    "country":"",
    "password":"",
    "birthdate":"",
    "email":"",
    "username":"",
    "addresses":{
        "address": {
            "addrType":"", 
            "addrDetails":""
        }
    }
}
msg:string=''
  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit(): void {
  }
registerUser(user:any){
  console.log(user.valid)
  if(user.valid){
  this._userService.registerUser(this.userData)
    .subscribe(res=>{
      console.log(res)
this._router.navigateByUrl(`activate/${res.data._id}`)
      if(res.apiStatus){
        this.msg = 'user seccessfuly added'
        user.reset()  
      }
    })
  }
  else{
    this.msg = "check your inputs"
  }
  }

}
