import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AhmedComponent } from './components/ahmed/ahmed.component';
import { PipeTestComponent } from './components/pipe-test/pipe-test.component';
import { EventTestComponent } from './components/event-test/event-test.component';
import { Event1TestComponent } from './components/event1-test/event1-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AhmedComponent,
    PipeTestComponent,
    EventTestComponent,
    Event1TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
