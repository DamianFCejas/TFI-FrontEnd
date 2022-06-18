import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../data/config/Config';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  constructor(private http: HttpClient) { }

  getPersona (): Observable<Persona>{
    return this.http.get<Persona>(config.baseUrl+ 'persona/perfil');
  }

  guardarNuevaPersona (persona:Persona): Observable<Persona> {
    return this.http.post<any>(config.baseUrl + "persona/new", persona);
  }

  modificarPersona (persona: Persona): Observable<any> {
    return this.http.put<any>(config.baseUrl + "persona/put", persona);
  }

  borrarPersona(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "delete/" + id);
  }

}
