import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciudadorigen } from '../interfaces/ciudadorigen';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(
    private http: HttpClient
  ) { }

  //Metodo que lista las ciudades origenes
  listaOrigenes() {
    const path = 'http://localhost:8080/api/ciudad/origen';
    return this.http.get<object[]>(path);
  }
}