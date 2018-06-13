import { Injectable } from '@angular/core';

import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MyNewServiceService {

  users: string[] = ["ahmed", "mohamed", "eslam"];

  public data: Observable<string>;

  constructor() { }


  getusers() {

    this.data = new Observable(observer => {

     setTimeout(() => {
      observer.next("ahmed");
     }, 1000);
     setTimeout(() => {
      observer.next("eslam");
     }, 2000);
     setTimeout(() => {
      observer.next("ali");
     }, 3000);

    });
    return this.data;

  }






}
