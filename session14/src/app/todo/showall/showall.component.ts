import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  monthNo=1
  months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul','aug', 'sep','oct','nov','sep']
  constructor() { }

  ngOnInit(): void {
  }

}
