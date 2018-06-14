import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from "../../services/http/http-service.service";
import { personEntity } from '../../services/http/person';

@Component({
  selector: 'app-http-service-component',
  templateUrl: './http-service-component.component.html',
  styleUrls: ['./http-service-component.component.css']
})
export class HttpServiceComponentComponent implements OnInit {

  persons: personEntity[];

  constructor(public dataService: HttpServiceService) {

    this.dataService.getperson().subscribe(per => {

      this.persons = per;
    });
  }

  ngOnInit() {
  }

}
