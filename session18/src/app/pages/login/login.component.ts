import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(20)])
  })
  msg=""
  isSubmitted:boolean=false
  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  get email(){ return this.loginUser.get('email')}
  get password(){return this.loginUser.get('password')}
  logMe(){
    this.isSubmitted=true
    if(this.loginUser.valid){
      this._userService.loginUser(this.loginUser.value).subscribe(response=>{
        console.log(response)
      },
      (error)=>{
        // console.log(error.error)
        this.msg= error.error.data
      },
      ()=>{
        //this._router.navigate([''])
        this._router.navigateByUrl('')
      })
    }
    else{
    }
  }
}
