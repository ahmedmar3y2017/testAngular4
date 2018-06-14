import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from "../../services/http/http-service.service";


@Component({
  selector: 'app-http-service-post',
  templateUrl: './http-service-post.component.html',
  styleUrls: ['./http-service-post.component.css']
})
export class HttpServicePostComponent implements OnInit {


  person = {
    name: "",
    username: "",
    email: ""


  }

  persons: any[] = [];

  constructor(public dataService: HttpServiceService) {

    this.dataService.getperson().subscribe(per => {

      this.persons = per;
    });
  }
  onSubmitEvent() {


    this.dataService.saveperson(this.person).subscribe(uu => {

      this.persons.unshift(uu);
    });

  }

  ngOnInit() {
  }

}
