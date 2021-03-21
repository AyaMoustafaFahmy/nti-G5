import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSliders(){
    let sliders= [
      'assets/1.jpeg',
      'assets/2.jpeg',
      'assets/3.jpeg'
    ];
    return sliders;
  }
}
