import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliders : any = []

  constructor( private _datService:DataService) { 
    this.sliders = _datService.getSliders()
  }
  ngOnInit(): void {
  }

}
