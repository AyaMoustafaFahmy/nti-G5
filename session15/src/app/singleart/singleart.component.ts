import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleart',
  templateUrl: './singleart.component.html',
  styleUrls: ['./singleart.component.css']
})
export class SingleartComponent implements OnInit {
@Input() art:any = null
  constructor() { }

  ngOnInit(): void {
  }

}
