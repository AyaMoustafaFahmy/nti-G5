import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
id:any=0
x:any=0
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(p=>this.id=p.id)
    // this.id = this.route.snapshot.params.id
    this.id = this.route.snapshot.paramMap.get('id')
    this.x =this.route.snapshot.queryParamMap.get('x')
  }

}
