import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StacksSignInButtonComponent } from './stacks-sign-in-button/stacks-sign-in-button.component';

@NgModule({
  declarations: [
    AppComponent,
    StacksSignInButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
