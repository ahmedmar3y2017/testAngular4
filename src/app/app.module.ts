import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyNewServiceService } from "./services/my-new-service.service";
import { HttpModule } from "@angular/http";
import { HttpServiceService } from "./services/http/http-service.service";

import { AppComponent } from './app.component';
import { AhmedComponent } from './components/ahmed/ahmed.component';
import { PipeTestComponent } from './components/pipe-test/pipe-test.component';
import { EventTestComponent } from './components/event-test/event-test.component';
import { Event1TestComponent } from './components/event1-test/event1-test.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from "@angular/forms";
import { CompServiceComponent } from './components/comp-service/comp-service.component';
import { HttpServiceComponentComponent } from './components/http-service-component/http-service-component.component';
import { HttpServicePostComponent } from './components/http-service-post/http-service-post.component';


@NgModule({
  // for component 
  declarations: [
    AppComponent,
    AhmedComponent,
    PipeTestComponent,
    EventTestComponent,
    Event1TestComponent,
    FormsComponent,
    CompServiceComponent,
    HttpServiceComponentComponent,
    HttpServicePostComponent
  ],
  // for modules 
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  // provided service 
  providers: [MyNewServiceService, HttpServiceService],
  bootstrap: [AppComponent]



})
export class AppModule { }
