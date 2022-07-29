import { Persona } from './../../model/persona.model';
import { PersonaService } from './../../service/persona.service';
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona: Persona = new Persona ("","","","","","","","","","","","","","","","","");

  //logueado:string ="";
  isUserLogged: boolean = false;
  copiado: boolean = false;
  

  constructor(
    private LoginService: LoginService,
    private personaService: PersonaService) { }

  ngOnInit(): void {
    this.isUserLogged = this.LoginService.isUserLogged();

    this.reloadData();
  }

  private reloadData() {
    this.personaService.getPersona().subscribe(
      data => {
        this.persona = data;
      });

  }

  logout(): void {
    this.LoginService.logout();
    this.isUserLogged = false;
    window.location.reload();
  }

  copiarMail(): void {
        
    navigator.clipboard.writeText('damianfcejas@hotmail.com'); //Falta ver cómo meter la interpolación acá.. (para el mail)
    this.copiado=!this.copiado;
    
    setTimeout(()=>{
    let mensaje= document.getElementById('mensaje');
    mensaje!.style.display='none';
    this.copiado=!this.copiado;
    }, 2000); 

    
  }

}
