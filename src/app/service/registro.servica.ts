import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private http: HttpClient
  ) { }
}