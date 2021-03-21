import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  //variables
articles = [
  {title:'art 1', content: 'content 1'},
  {title:'art 2', content: 'content 2'},
  {title:'art 3', content: 'content 3'},
  {title:'art 4', content: 'content 4'},
  {title:'art 5', content: 'content 5'}
]
data:any=[]
  //life cycle
  constructor(private dS:DataService) { 
    console.log('constructor')
    this.showData()
  }
  ngOnInit(): void {
    console.log('oninit')
  }
//functions
showData(){
  console.log(this.dS.getData())
  this.data = this.dS.getData()
}
}
