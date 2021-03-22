import { Component, OnInit } from '@angular/core';
import {Doctor} from 'src/app/interfaces/doctor'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  doctorData : Doctor = {
    name:'',
    spicialize:'',
    address:{
      city:'',
      streetName:'',
      bNo:null
    }
  }
  constructor() { }
  ngOnInit(): void {}
  addDoctor(doctor:any){
    // console.log(doctor.valid)
    // console.log(this.doctorData)
    if(doctor.valid){
      console.log(this.doctorData)
    }
  }
}
