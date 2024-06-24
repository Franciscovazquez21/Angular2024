import { Component } from '@angular/core';

@Component({
  selector: 'app-ice-list',
  templateUrl: './ice-list.component.html',
  styleUrl: './ice-list.component.scss'
})
export class IceListComponent {
  ice= {
    "Imagen":"/assets/img/chocolate.jpg", 
    "Sabor":"Chocolate",
    "Tipo":"Crema",
    "Precio": 500,
    "Cant":10
  }
  constructor(){
    
  }
}
