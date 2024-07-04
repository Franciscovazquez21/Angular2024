import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {

  
  constructor(){}
  
  @Input()
  quantity!: number;
  
  @Input()
  max! : number;

  @Input()
  stock!: number;

  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached : EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  decrementarCantidad():void {
    if(this.quantity>0){//control de rango
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }  
  }
  
  incrementarCantidad():void {
    if(this.max>this.quantity){//control de stock permitido para pedir
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("maximo permitido");
    }
  }
  
  onChangeQuantity($event: Event): void {
    const inputElement = $event.target as HTMLInputElement;
    const inputValue = Number(inputElement.value);

    if(inputValue>this.max){
      this.quantity=this.max;
    }
    this.quantityChange.emit(this.quantity);
  }

  validateInput(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (
      !allowedKeys.includes(event.key) &&
      !/^[0-9]$/.test(event.key)
    ) {
      event.preventDefault();
    }
  }

}
