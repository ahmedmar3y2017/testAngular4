import {Component, OnInit} from '@angular/core';
import {persons} from "./persons";

@Component({
  selector: 'app-ahmed',
  templateUrl: './ahmed.component.html',
  styleUrls: ['./ahmed.component.css']
})
export class AhmedComponent implements OnInit {


  name: string = "ahmed";
  age: number = 22;


  employee: persons;
  employees: persons[];
  arra: any;

  constructor() {
    this.employee = {
      name: "ahmed",
      address:
        "alex"
      , age:
        55
    }
    ;
    this.employees = [{
      name: "ahmed",
      address:
        "alex"
      , age:
        55


    },
      {
        name: "ali",
        address:
          "cairo"
        , age:
        200


      }


    ]

    this.name = "eslam ";
    this.arra = [1, 2, 3]
  }

  ngOnInit() {

    this.age = 40;
    this.changeaddressEmployee();
  }

  changeaddressEmployee() {

    this.employee.address = "cairo";

  }


}


