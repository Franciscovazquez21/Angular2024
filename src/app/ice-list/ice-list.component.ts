import { Component } from '@angular/core';
import { Ice } from './Ice'; //necesario importar la clase para que conozca los atributos/metodos.

@Component({
  selector: 'app-ice-list',
  templateUrl: './ice-list.component.html',
  styleUrl: './ice-list.component.scss'
})
export class IceListComponent {
  ice : Ice[] = [
    {//representa mock (objeto que simula datos para simular la vista)
      imagen:"/assets/img/chocolate.jpg", 
      sabor:"Chocolate",
      tipo:"Crema",
      precio: 500,
      stock:10
    },
    {
      imagen:"/assets/img/chocolate.jpg", 
      sabor:"Frutilla",
      tipo:"Crema",
      precio: 400,
      stock:6
    },
    {
      imagen:"/assets/img/chocolate.jpg", 
      sabor:"Vainilla",
      tipo:"Crema",
      precio: 350,
      stock:5
    }
]
  constructor(){
    
  }
}
