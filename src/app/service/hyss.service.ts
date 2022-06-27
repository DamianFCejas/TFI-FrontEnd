import { config } from './../data/config/Config';
import { Hyss } from './../data/Hyss';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HyssService {

  constructor(private http: HttpClient) { }

  obtenerDatosHyss(): Observable<Hyss[]> {
    return this.http.get<any>(config.baseUrl + "hyss");
  }

  guardarNuevoHyss(hyss:Hyss): Observable<Hyss> {
    return this.http.post<any>(config.baseUrl + "hyss/create", hyss);
  }

  modificarHyss(hyss: Hyss): Observable<any> {
    return this.http.put<any>(config.baseUrl + "hyss/update", hyss);
  }

  borrarHyss(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "hyss/" + id);
  }

}
