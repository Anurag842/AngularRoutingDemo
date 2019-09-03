import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NavigateComponent } from './navigate/navigate.component';
import { RouterModule } from '@angular/router';
import { FunctionCall } from '@angular/compiler';
import { RouteModModule, RoutesTable } from './route-mod/route-mod.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouteModModule,
    RouterModule.forRoot(RoutesTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
