import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  AppRoutingModule,
  routedComponents
} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
