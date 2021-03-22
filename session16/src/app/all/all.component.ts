import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
data:any = []
isLoaded = false
  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this._user.getImages().subscribe(
      (res) => {
        this.data = res
        console.log(res)
      },
      (err) =>  {
        //error
        console.log(err)
      }, 
      ()  =>  {
        //finish
        this.isLoaded=true
    }
    )
  }

}
