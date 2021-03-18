import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  task ={title:'', content:''}
  tasks: any[] = JSON.parse(localStorage.getItem('tasks')) || []

  constructor() { }

  ngOnInit(): void {
  }
  addTask(){
    this.tasks.push(this.task)
    this.task ={title:'', content:''}
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
  delItem(i){
    this.tasks.splice(i,1)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

}
