import { Injectable } from '@angular/core';

import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private _taskurl = 'https://jsonplaceholder.typicode.com/users';

  constructor(public _http: Http) {


  }
  getperson() {
    return this._http.get(this._taskurl)
      .map(res => res.json());


  }
saveperson(person){

  return this._http.post(this._taskurl ,person)
      .map(res => res.json());


}


}
