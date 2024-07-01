import { Component } from '@angular/core';
import { IceCartService } from '../ice-cart.service';
import { Ice } from '../ice-list/Ice';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$ : Ice[] = [];

  constructor(private cart : IceCartService){
    cart.cartList.subscribe(c=>this.cartList$ = c);
  }

}
