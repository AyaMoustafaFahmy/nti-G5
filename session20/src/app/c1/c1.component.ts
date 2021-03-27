import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
test :number=5

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    document.querySelector('body').classList.add('c1');
}
}
