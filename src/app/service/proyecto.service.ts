import { config } from './../data/config/Config';
import { Proyecto } from './../data/Proyecto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  obtenerDatosProyecto(): Observable<Proyecto[]> {
    return this.http.get<any>(config.baseUrl + "proyecto");
  }

  guardarNuevoProyecto(proyecto:Proyecto): Observable<Proyecto> {
    return this.http.post<any>(config.baseUrl + "proyecto/create", proyecto);
  }

  modificarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(config.baseUrl + "proyecto/update", proyecto);
  }

  borrarProyecto(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "proyecto/" + id);
  }

}
