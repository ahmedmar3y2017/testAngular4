import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from "../../services/http/http-service.service";


@Component({
  selector: 'app-http-service-post',
  templateUrl: './http-service-post.component.html',
  styleUrls: ['./http-service-post.component.css']
})
export class HttpServicePostComponent implements OnInit {


  person = {
    id: 0,
    name: "",
    username: "",
    email: ""


  }


  idEdit: boolean = false;

  persons: any[] = [];

  constructor(public dataService: HttpServiceService) {

    this.dataService.getperson().subscribe(per => {

      this.persons = per;
    });
  }
  onSubmitEvent() {
    console.log(this.idEdit);
    if (this.idEdit) {

      // update 
      this.dataService.editperson(this.person).subscribe(uu => {

        for (let index = 0; index < this.persons.length; index++) {
          if (this.persons[index].id == this.person.id) {

            this.persons.splice(index, 1);

          }

        }
        this.persons.push(this.person);

        this.idEdit = false;
        this.person ={
          id: 0,
          name: "",
          username: "",
          email: ""
      
      
        };
      




      });

    } else {
      this.dataService.saveperson(this.person).subscribe(uu => {

        this.persons.unshift(uu);



      });
    }


  }

  deleteItem(id) {



    this.dataService.deleteperson(id).subscribe(uu => {
      console.log(uu);

      for (let index = 0; index < this.persons.length; index++) {
        if (this.persons[index].id == id) {

          this.persons.splice(index, 1);

        }

      }

    });


  }

  editItem(item) {

    this.idEdit = true;
    this.person = item;

  }




  ngOnInit() {
  }

}
