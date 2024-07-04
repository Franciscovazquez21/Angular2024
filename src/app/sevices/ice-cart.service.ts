import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ice } from '../ice-list/Ice';

@Injectable({
  providedIn: 'root'
})

export class IceCartService {
  private _cartList : Ice[] = [];
  cartList: BehaviorSubject<Ice[]> = new BehaviorSubject(this._cartList);
  
  constructor() { }

  addToCart(ice: Ice) {  
    let item = this._cartList.find((v)=>v.taste == ice.taste);
    if(!item){
      this._cartList.push({... ice});
    }else{
      item.quantity += ice.quantity;
    }
    this.cartList.next(this._cartList);
  }


  removeToCart(ice: Ice) {  
    let item = this._cartList.findIndex((v)=>v.taste == ice.taste);
    if(item != -1){
      this._cartList.splice(item,1);
      this.cartList.next(this._cartList);
    }
  }

}
