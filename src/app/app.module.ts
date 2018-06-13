import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AhmedComponent } from './components/ahmed/ahmed.component';
import { PipeTestComponent } from './components/pipe-test/pipe-test.component';
import { EventTestComponent } from './components/event-test/event-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AhmedComponent,
    PipeTestComponent,
    EventTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
