import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IceListComponent } from './ice-list/ice-list.component';

import { FormsModule } from '@angular/forms';
import { IceAboutComponent } from './ice-about/ice-about.component';
import { IcesComponent } from './ices/ices.component';
import { IceCarritoComponent } from './ice-carrito/ice-carrito.component';
@NgModule({
  declarations: [
    AppComponent,
    IceListComponent,
    IceAboutComponent,
    IcesComponent,
    IceCarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
