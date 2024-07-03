import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './core/authentication/authentication.module';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,

    AppRoutingModule,
    AuthenticationModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
