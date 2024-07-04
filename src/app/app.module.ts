import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IceListComponent } from './ice-list/ice-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { IceAboutComponent } from './ice-about/ice-about.component';
import { IcesComponent } from './ices/ices.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
@NgModule({
  declarations: [
    AppComponent,
    IceListComponent,
    IceAboutComponent,
    IcesComponent,
    InputIntegerComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//para el two-way data binding
    HttpClientModule//provee la interfaz para consumir apis
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
