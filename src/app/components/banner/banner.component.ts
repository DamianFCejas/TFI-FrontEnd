import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from './../../model/persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: Persona = new Persona ("","","","","","","","","","","","","","","","","");  

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
