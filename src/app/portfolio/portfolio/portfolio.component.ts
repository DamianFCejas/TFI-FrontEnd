import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  logueado:string = "";

  constructor(public LoginService: LoginService) { }
  

  ngOnInit(): void {

    this.logueado = this.LoginService.getUserLogged();
  }

  salir():void {
    this.LoginService.deleteToken();
    this.logueado="";
  }

  

}
