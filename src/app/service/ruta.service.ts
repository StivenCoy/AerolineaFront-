import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../interfaces/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(
    private http: HttpClient
  ) { }
}
