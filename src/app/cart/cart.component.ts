import { Component } from '@angular/core';
import { Ice } from '../ice-list/Ice';
import { IceCartService } from '../sevices/ice-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$ : Ice[] = [];
  total:number;

  constructor(private cart : IceCartService){
    cart.cartList.subscribe(c=>this.cartList$ = c);
    this.total=0;
  }

  //elimina del carrito 
  removeToCart(ice: Ice) {
    this.cart.removeToCart(ice);
  }   

}
