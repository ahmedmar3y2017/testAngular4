import { Component, OnInit } from '@angular/core';

// import service 
import { MyNewServiceService } from "../../services/my-new-service.service";


@Component({
  selector: 'app-comp-service',
  templateUrl: './comp-service.component.html',
  styleUrls: ['./comp-service.component.css']
})
export class CompServiceComponent implements OnInit {


  // we should define attributes 
  users: string[] = [];

  // inject Service to Constructor 
  constructor(public dataservice: MyNewServiceService) {

    // get data from service 
    this.dataservice.getusers().subscribe(data => {
      console.log(data);
      this.users.push(data);

    });


  }

  ngOnInit() {
  }

}
