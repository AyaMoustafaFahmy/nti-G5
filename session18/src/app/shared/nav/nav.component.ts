import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this._userService.logoutUser().subscribe(res=>{
      console.log(res)
      localStorage.removeItem('token')
      localStorage.removeItem('userStatus')
      this._router.navigateByUrl('login')
    })
  }

}
