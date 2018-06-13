import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1-test',
  templateUrl: './event1-test.component.html',
  styleUrls: ['./event1-test.component.css']
})
export class Event1TestComponent implements OnInit {

name:string="true";


check:boolean=true;


clickButton(){
  this.check=!this.check;


if(this.check == true){
  this.name="true";


}else 
{
  this.name="false";

}

}


  constructor() { }

  ngOnInit() {
  }

}
