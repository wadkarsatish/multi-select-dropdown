import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiSelectDropdownModule } from 'projects/multi-select-dropdown/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultiSelectDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
