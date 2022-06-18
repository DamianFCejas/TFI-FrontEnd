import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../data/config/Config';
import { Educacion } from '../data/Educacion';

@Injectable({
  providedIn: 'root'
})  
export class EducacionService {

  constructor(private http: HttpClient) { }

  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<any>(config.baseUrl + "educacion");
  }

  guardarNuevaEducacion(educacion:Educacion): Observable<Educacion> {
    return this.http.post<any>(config.baseUrl + "educacion/create", educacion);
  }

  modificarEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(config.baseUrl + "educacion/update", educacion);
  }

  borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "educacion/" + id);
  }

}
