import { PersonaService } from './../../service/persona.service';
import { Persona } from './../../model/persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  persona: Persona = new Persona ("","","","","","","","","");  

  constructor(
    private personaService: PersonaService,
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData() {
    this.personaService.getPersona().subscribe(
      data => {
        this.persona = data;
      });

  }

}
