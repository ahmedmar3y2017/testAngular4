import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.css']
})
export class EventTestComponent implements OnInit {

  constructor() { }


button1Click(e , args){

console.log(e.type  );
console.log(args  );

}


  ngOnInit() {
  }

}
