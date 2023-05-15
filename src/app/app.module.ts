import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuelUPMenusComponent } from './Components/fuel-upmenus/fuel-upmenus.component';

@NgModule({
  declarations: [
    AppComponent,
    FuelUPMenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
