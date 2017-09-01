import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SelectModule } from 'ng-selectable';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [BrowserModule, SelectModule, HttpModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule {}
