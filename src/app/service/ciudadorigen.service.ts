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
}