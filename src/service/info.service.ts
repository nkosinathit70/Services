import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: Http) { }
  getUsers()
  {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    .pipe(map(res =>{
      return res.json();
    }))
  }
//another way to send dat
  getInfo(){
    return this.http.get('https://conduit.productionready.io/api/profiles/eric')
    console.log('Eric');
  }
}
