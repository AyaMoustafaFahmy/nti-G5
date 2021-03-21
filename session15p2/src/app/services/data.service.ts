import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl ='https://jsonplaceholder.typicode.com/posts?_limit=10'
  constructor(private _http: HttpClient) { }

  getSliders(){
    let sliders= [
      'assets/1.jpeg',
      'assets/2.jpeg',
      'assets/3.jpeg'
    ];
    return sliders;
  }
  getAboutData(){
    let data = {
      title:'about us',
      img:'assets/1.jpeg',
      details:'s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con'
    }
    return data
  }
  getApiData():Observable<any>{
    return this._http.get(this.apiUrl)
  }
}
