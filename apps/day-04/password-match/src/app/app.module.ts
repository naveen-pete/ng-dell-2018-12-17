import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterUserRfComponent } from './register-user-rf/register-user-rf.component';
import { RegisterUserTdfComponent } from './register-user-tdf/register-user-tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserRfComponent,
    RegisterUserTdfComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
