import { Component } from '@angular/core';
import { Ice } from './Ice'; //necesario importar la clase para que conozca los atributos/metodos.

@Component({
  selector: 'app-ice-list',
  templateUrl: './ice-list.component.html',
  styleUrl: './ice-list.component.scss'
})
export class IceListComponent {

  ices : Ice[] = [
    {//representa mock (objeto que simula datos para simular la vista)
      imagen:"/assets/img/chocolate.jpg", 
      sabor:"Chocolate",
      tipo:"Crema",
      precio: 500,
      stock:10,
      cantidad: 0,
    },
    {
      imagen:"/assets/img/chocolate.jpg", 
      sabor:"Frutilla",
      tipo:"Crema",
      precio: 400,
      stock:6,
      cantidad: 0,
    },
    {
      imagen:"/assets/img/chocolate.jpg", 
      sabor:"Vainilla",
      tipo:"Crema",
      precio: 350,
      stock:5,
      cantidad: 0,
    }
  ]

  constructor(){
  }

  decrementarCantidad(ice: Ice):void {
    if(ice.cantidad>0)//control de rango
      ice.cantidad--;  
  }
  
  agregarCantidad(ice: Ice):void {
    if(ice.stock>ice.cantidad)//control de stock permitido para pedir
      ice.cantidad++;
  }
  
  alCambiarCantidad($event: Event ,ice: Ice):void {
    console.log($event);
    }
    
}
