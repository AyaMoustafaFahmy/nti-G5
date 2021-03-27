import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activateuser',
  templateUrl: './activateuser.component.html',
  styleUrls: ['./activateuser.component.css']
})
export class ActivateuserComponent implements OnInit {
status=false
  constructor(private _aRoute: ActivatedRoute, private _user:UserService) { }

  ngOnInit(): void {
  }

  activate(){
    let id = this._aRoute.snapshot.params.id
    this._user.activateUser(id).subscribe(res=>console.log(res))
    this.status = true
  }
}
