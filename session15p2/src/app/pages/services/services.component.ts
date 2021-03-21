import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  todos :any = []
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getApiData().subscribe(responnse=>{
      console.log(responnse)
      this.todos= responnse
    })
  }

}
