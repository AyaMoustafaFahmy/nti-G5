import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navStatus :boolean= true;
  public userStatus:boolean=false
  constructor() { }
}
