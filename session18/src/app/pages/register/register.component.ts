import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
registerUser(user:any){
  console.log(user.valid)
  if(user.valid){
  // this._user.registerUser(this.userData)
  //   .subscribe(res=>{
  //     if(res.apiStatus){
  //       this.msg = 'user seccessfuly added'
  //       user.reset()  
  //     }
  //   })
  }
  else{
    this.msg = "check your inputs"
  }
  }

}
