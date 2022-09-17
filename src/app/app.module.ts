import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CaioHeaderComponent } from './Components/caio-header/caio-header.component';
import { CaioCompoundInterestsComponent } from './Components/caio-compound-interests/caio-compound-interests.component';
import { CaioRandomNumberComponent } from './Components/caio-random-number/caio-random-number.component';
import { CaioSimpleInterestsComponent } from './Components/caio-simple-interests/caio-simple-interests.component';
import { CaioTimerComponent } from './Components/caio-timer/caio-timer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CaioHeaderComponent, CaioCompoundInterestsComponent, CaioRandomNumberComponent, CaioSimpleInterestsComponent, CaioTimerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
