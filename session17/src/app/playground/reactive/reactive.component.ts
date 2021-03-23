import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(15)]),
    age:new FormControl({value:36, disabled:true}),
    email: new FormControl(),
    address:new FormGroup({
      country:new FormControl(),
      street:new FormControl(),
      bNo: new FormControl()
    })
  })
  // userForm
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    // this.userForm = this.formBuilder.group({
    //   name:['',[Validators.required]],
    //   age:[''],
    //   email:[''],
    //   address:this.formBuilder.group({
    //     country:[''],
    //     street:[''],
    //     bNo:['']
    //   })
    // })
  }
  get name(){return this.userForm.get('name')}
  get age(){return this.userForm.get('age')}
  submitData(){
    console.log(this.userForm.value)
  }
}
