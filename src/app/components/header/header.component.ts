import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado:string ="";

  constructor(public LoginService: LoginService) { }

  ngOnInit(): void {
    this.logueado = this.LoginService.getUserLogged();
  }

}
