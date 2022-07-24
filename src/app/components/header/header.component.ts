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
  copiado: boolean = false;


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

  copiarMail(): void {
        
    navigator.clipboard.writeText('damianfcejas@hotmail.com');
    this.copiado=!this.copiado;
    
    setTimeout(()=>{
    let mensaje= document.getElementById('mensaje');
    mensaje!.style.display='none';
    this.copiado=!this.copiado;
    }, 2000); 

    
  }

}
