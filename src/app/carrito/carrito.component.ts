import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  ice= {
    "Imagen":"assets/img/chocolate.jpg",
    "Sabor":"Chocolate",
    "Tipo":"Crema",
    "Precio": 500,
    "Cant":10
  }
  constructor(){

  }
}
