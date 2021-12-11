import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pasajero } from '../interfaces/pasajero';

@Injectable({
  providedIn: 'root'
})
export class TiqueteService {

  constructor(
    private http: HttpClient
  ) { }

  crearPasajero(pasajero: Pasajero) {
    const path = `http://localhost:8080/api/pasajero/crear`;
    return this.http.post<object[]>(path,pasajero);
  }
}