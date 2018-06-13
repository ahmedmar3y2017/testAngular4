import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {


name:string="ahmed mohamed mar3y";

age:number=22;


birthday =new Date(1996 , 30 , 9);


  constructor() { }

  ngOnInit() {
  }

}
