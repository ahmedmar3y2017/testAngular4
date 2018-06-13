import { Component, OnInit } from '@angular/core';
import { person } from './person';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  per = new person("", "", 0);

  verifyForm = {};


  constructor() {

  }

  onSubmitEvent({ value, valid }) {
    if (valid) {
      this.verifyForm = value;
    } else {
      this.verifyForm = "Not valid";

    }

  }



  ngOnInit() {
  }

}
