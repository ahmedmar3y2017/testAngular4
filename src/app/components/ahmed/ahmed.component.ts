import {Component, OnInit} from '@angular/core';
import {persons} from "./persons";

@Component({
  selector: 'app-ahmed',
  templateUrl: './ahmed.component.html',
  styleUrls: ['./ahmed.component.css']
})
export class AhmedComponent implements OnInit {

  person = ["ahmed", "mohamed", "ali"];

  job = ["java", "c++ ", "pthon"];

  image: string = "./../../assets/200.png";

  flag: boolean = false;


  myclassCss: boolean = true;


  myclassesCss = {};


  constructor() {
    this.generateClasses();
  }

  ngOnInit(): void {
  }

  generateClasses() {

    this.myclassesCss = {
      myclass: true,
      myclass1: false


    }

  }


}


