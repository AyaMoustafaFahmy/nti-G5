import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userData :any=null
  constructor(private _userService:UserService) {

   }

  ngOnInit(): void {
    this._userService.profile().subscribe(res=>{
      this.userData= res
    })
  }

}
