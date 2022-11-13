import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataportfolioService {

  constructor(private http:HttpClient) { }
  
  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }
}
