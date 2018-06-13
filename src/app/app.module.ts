import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AhmedComponent } from './components/ahmed/ahmed.component';
import { PipeTestComponent } from './components/pipe-test/pipe-test.component';
import { EventTestComponent } from './components/event-test/event-test.component';
import { Event1TestComponent } from './components/event1-test/event1-test.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AhmedComponent,
    PipeTestComponent,
    EventTestComponent,
    Event1TestComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
