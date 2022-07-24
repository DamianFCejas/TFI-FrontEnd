import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  persona: Persona = new Persona ("","","","","","","","","");
  isUserLogged: Boolean = false;
  personaForm: FormGroup;

  constructor(
    private personaService: PersonaService,
    private loginService: LoginService,
    private formBuilder: FormBuilder) {
      this.personaForm = this.formBuilder.group({
        idpersona: [''],
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        apellido: ['', [Validators.required, Validators.minLength(3)]],
        domicilio: ['', [Validators.required, Validators.minLength(3)]],
        telefono: ['', [Validators.required, Validators.minLength(3)]],
        correo: ['', [Validators.required, Validators.minLength(6)]],
        fechaNac: ['', [Validators.required, Validators.minLength(2)]],
        sobreMi: ['', [Validators.required, Validators.minLength(5)]],
        urlFoto: ['', [Validators.required, Validators.minLength(5)]],
        puesto: ['', [Validators.required, Validators.minLength(3)]],
        
      });
     }

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

  private loadForm(persona: Persona) {
    this.personaForm.setValue({
      idpersona: persona.idpersona,
      nombre: persona.nombre,
      apellido: persona.apellido,
      domicilio: persona.domicilio,
      telefono: persona.telefono,
      correo: persona.correo,
      fechaNac: persona.fechaNac,
      sobreMi: persona.sobreMi,
      urlFoto: persona.urlFoto,
      puesto: persona.puesto
    })
  }

  onSubmit() {

    let persona: Persona = this.personaForm.value;
    
      this.personaService.modificarPersona(persona).subscribe(
        () => {
          this.reloadData();
        }
      )      
  }
  onEditPersona(index: number) {
    let persona: Persona = this.persona;
    this.personaService.modificarPersona(persona)
    this.loadForm(persona);
  }

  get Nombre(){
  return this.personaForm.get('nombre');
  }

  get Apellido(){
    return this.personaForm.get('apellido'); 
    }

  get Domicilio(){
  return this.personaForm.get('domicilio'); 
  }

  get Telefono(){
    return this.personaForm.get('telefono'); 
  }

  get Correo(){
      return this.personaForm.get('correo'); 
  }

  get FechaNac(){
    return this.personaForm.get('fechaNac'); 
  }
  
  get SobreMi(){
    return this.personaForm.get('sobreMi'); 
  }

  get UrlFoto(){
      return this.personaForm.get('urlFoto'); 
  }

  get Puesto(){
    return this.personaForm.get('puesto'); 
  }

}
