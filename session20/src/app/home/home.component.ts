import { Component, OnInit, ViewChild } from '@angular/core';
import { C1Component } from '../c1/c1.component';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @ViewChild(C1Component) child:C1Component
  constructor(public _global:GlobalService) { 
    _global.navStatus=true
  }
  ngOnInit(): void {
   // console.log(this.child.test)
  }
  // x(){this.child=14}

}

