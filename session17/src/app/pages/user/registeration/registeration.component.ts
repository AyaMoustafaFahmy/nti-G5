import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  msg:string= ''
  status:boolean = false
  isSubmitted = false
  userForm = new FormGroup({
    name :new FormControl('', [Validators.required, Validators.minLength(3)]),
    email :new FormControl('',[Validators.email]),
    password  :new FormControl(''),
    role  :new FormControl(1), //paitent
    address  :new FormControl('',[Validators.required]),
    phone  :new FormControl('',[Validators.minLength(11), Validators.maxLength(11)]),
    name_ar  :new FormControl('', [Validators.required, Validators.minLength(3)]),
    address_ar  :new FormControl('',[Validators.required]),
    price  :new FormControl(''),
    gender  :new FormControl(''),
    governorate  :new FormControl(''),
    city :new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

  registerPaitent(){
    this.isSubmitted=true
    if(this.userForm.valid){
      this.msg ="user added successfuly"
      this.status=true
      console.log(this.userForm.value)
    }
    else{
      this.status=false
      this.msg="error in data"
    }
  }
}
