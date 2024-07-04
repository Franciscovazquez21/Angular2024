import { Component, OnInit } from '@angular/core';
import { IceCartService } from '../sevices/ice-cart.service';
import { IceDataService } from '../sevices/ice-data.service';
import { Ice } from './Ice'; //necesario importar la clase para que conozca los atributos/metodos.

@Component({
  selector: 'app-ice-list',
  templateUrl: './ice-list.component.html',
  styleUrl: './ice-list.component.scss'
})
export class IceListComponent implements OnInit {

  ices : Ice[] = [];
    /*representa mock (objeto que simula datos para simular la vista)
    {
      image:"public/assets/chocolate.jpg", 
      taste:"Chocolate",
      type:"Crema",
      price: 500,
      stock:10,
      quantity: 0,
    },
    {
      image:"public/assets/chocolate.jpg", 
      taste:"Frutilla",
      type:"Crema",
      price: 400,
      stock:6,
      quantity: 0,
    },
    {
      image:"public/assets/chocolate.jpg", 
      taste:"Vainilla",
      type:"Crema",
      price: 350,
      stock:5,
      quantity: 0,
    }
  ]
  */
  constructor(    
    private cart : IceCartService,
    private iceDataService: IceDataService){}
  
  ngOnInit(): void {
    this.iceDataService.getAll().subscribe(ices =>this.ices = ices);
  }


  addToCart(ice: Ice):void{
    if(ice.quantity>0){
    this.cart.addToCart(ice);
    ice.stock-=ice.quantity;
    ice.quantity=0;
    }else{
      alert("debe agregar cantidad al pedido");
    }
  }

  maxReached(s:String):void{
    alert(s);
  }
    
}
