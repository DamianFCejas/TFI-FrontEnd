import { LoginnDto } from './../data/LoginnDto';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { config } from '../data/config/Config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "/api/user/";

  constructor(private http: HttpClient, private cookies: CookieService) { }

  public loginn(credentials: LoginnDto): Observable<Boolean> {
    return this.http.post<Boolean>(config.baseUrl + "login", credentials).pipe(
      tap((response: Boolean) =>{
        if (response)
        sessionStorage.setItem("username", "usuario2");
      })
    );
    
  }

  public logout () {
    sessionStorage.removeItem("username");
  }

  public isUserLogged():boolean {
    return sessionStorage.getItem("username") !== null;
  }

  login(user: any): Observable<any>{
    return this.http.post(this.url+"login", user);
  }

  
  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken() {
    this.cookies.delete("token");
  }

  getUserLogged() {
    const token = this.getToken();
    return token;
  }
  


}
