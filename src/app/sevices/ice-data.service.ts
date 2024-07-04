import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Ice } from '../ice-list/Ice';

const URL = "https://6683f7e956e7503d1adee088.mockapi.io/api/v1/ice";

@Injectable({
  providedIn: 'root'
})
export class IceDataService {

  constructor(private http : HttpClient) { }


  public getAll() : Observable<Ice[]>{
    //http.get() equivale a la funcionalidad de fetch=>la diferencia es que fecth maneja promesas y http devuelve observable
    return this.http.get<Ice[]>(URL)
        .pipe(
          tap((ices : Ice[])=>ices.forEach(ice=> ice.quantity=0))
        );
  }

}
