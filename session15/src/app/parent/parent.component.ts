import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
y=9
  constructor() { }

  ngOnInit(): void {
  }
  addten(){
    this.y+=10
  }

}
