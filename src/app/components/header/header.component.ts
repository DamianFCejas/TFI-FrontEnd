import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //logueado:string ="";
  isUserLogged: boolean = false;

  constructor(
    private LoginService: LoginService) { }

  ngOnInit(): void {
    this.isUserLogged = this.LoginService.isUserLogged();
  }

  logout(): void {
    this.LoginService.logout();
    this.isUserLogged = false;
    window.location.reload();
  }

}
