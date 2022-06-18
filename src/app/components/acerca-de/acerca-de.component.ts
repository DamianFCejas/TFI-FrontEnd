import { LoginService } from './../../service/login.service';
import { Persona } from './../../model/persona.model';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona ("","","","","","","","");
  isUserLogged: Boolean = false;

  constructor(
    private personaService: PersonaService,
    private loginService: LoginService,
    ) { }

  ngOnInit(): void {
    this.isUserLogged = this.loginService.isUserLogged();
    
    this.reloadData();
  }

  private reloadData() {
    this.personaService.getPersona().subscribe(
      data => {
        this.persona = data;
      });

  }

}
