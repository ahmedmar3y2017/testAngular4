import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private _taskurl = 'https://jsonplaceholder.typicode.com/users';

  constructor(public _http: Http) {


  }
  editperson(person) {
    console.log("Person is : "+person.id )
    return this._http.put(this._taskurl + "/" + person.id , person)
      .map(res => res.json());

  }
  deleteperson(id) {

    return this._http.delete(this._taskurl + "/" + id)
      .map(res => res.json());

  }
  getperson() {
    return this._http.get(this._taskurl)
      .map(res => res.json());


  }
  saveperson(person) {

    return this._http.post(this._taskurl, person)
      .map(res => res.json());


  }



}
