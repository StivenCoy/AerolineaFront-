import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vuelo } from '../interfaces/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(
    private http: HttpClient
  ) { }

  // Método que obtiene la lista de vuelos
  listarVuelos() {
    const path = 'http://localhost:8080/api/vuelos/listar';
    return this.http.get<Vuelo[]>(path);
  }
}
