import { config } from './../data/config/Config';
import { Experiencia } from './../data/Experiencia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<any>(config.baseUrl + "experiencia");
  }

  guardarNuevaExperiencia(experiencia:Experiencia): Observable<Experiencia> {
    return this.http.post<any>(config.baseUrl + "experiencia/create", experiencia);
  }

  modificarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(config.baseUrl + "experiencia/update", experiencia);
  }

  borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "experiencia/" + id);
  }
}
