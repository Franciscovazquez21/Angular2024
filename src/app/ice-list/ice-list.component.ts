import { Component } from '@angular/core';
import { IceCartService } from '../ice-cart.service';
import { Ice } from './Ice'; //necesario importar la clase para que conozca los atributos/metodos.

@Component({
  selector: 'app-ice-list',
  templateUrl: './ice-list.component.html',
  styleUrl: './ice-list.component.scss'
})
export class IceListComponent {

  ices : Ice[] = [
    {//representa mock (objeto que simula datos para simular la vista)
      image:"/assets/img/chocolate.jpg", 
      taste:"Chocolate",
      type:"Crema",
      price: 500,
      stock:10,
      quantity: 0,
    },
    {
      image:"/assets/img/chocolate.jpg", 
      taste:"Frutilla",
      type:"Crema",
      price: 400,
      stock:6,
      quantity: 0,
    },
    {
      image:"/assets/img/chocolate.jpg", 
      taste:"Vainilla",
      type:"Crema",
      price: 350,
      stock:5,
      quantity: 0,
    }
  ]

  constructor(private cart : IceCartService){}


  addToCart(ice: Ice):void{
    this.cart.addToCart(ice);
    ice.stock-=ice.quantity;
    ice.quantity=0;
  }

  maxReached(s:String){
    alert(s);
  }
    
}
