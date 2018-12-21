import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonComponentsModule } from 'common-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
