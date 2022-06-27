import { LoginService } from './../../service/login.service';
import { ProyectoService } from './../../service/proyecto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proyecto } from './../../data/Proyecto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoList: Proyecto[] = [];
  isUserLogged: Boolean = false;

  proyectoForm: FormGroup;

  constructor(
    private proyectoService: ProyectoService,
    private loginService: LoginService,
    private formBuilder: FormBuilder) {

      this.proyectoForm = this.formBuilder.group({
        idproyecto: [''],
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        descripcion: ['', [Validators.required, Validators.minLength(5)]],
        urlFoto: ['', [Validators.required, Validators.minLength(5)]],
        
      });

     }

  ngOnInit(): void {
    this.isUserLogged = this.loginService.isUserLogged();
    
    this.reloadData();
  }

  private reloadData() {
    this.proyectoService.obtenerDatosProyecto().subscribe(
      (data) => {
        this.proyectoList = data;
      }
    );
  }

  private clearForm() {
    this.proyectoForm.setValue({
      idproyecto: '',
      nombre: '',
      descripcion: '',
      urlFoto: ''            
    })
  }

  private loadForm(proyecto: Proyecto) {
    this.proyectoForm.setValue({
      idproyecto: proyecto.idproyecto,
      nombre: proyecto.nombre,
      descripcion: proyecto.descripcion,
      urlFoto: proyecto.urlFoto
    })
  }

  onSubmit() {

    let proyecto: Proyecto = this.proyectoForm.value;
    if (this.proyectoForm.get('idproyecto')?.value == '') {
      this.proyectoService.guardarNuevoProyecto(proyecto).subscribe(
        (newProyecto: Proyecto) => {
          this.proyectoList.push(newProyecto);
        }
      );
    } else {
      this.proyectoService.modificarProyecto(proyecto).subscribe(
        () => {
          this.reloadData();
        }
      )
    }      
  }

  onNewProyecto() {
    this.clearForm();
  }

  onEditProyecto(index: number) {
    let proyecto: Proyecto = this.proyectoList[index];
    this.loadForm(proyecto);
  }

  onDeleteProyecto(index: number) {
    let proyecto: Proyecto = this.proyectoList[index];
    if (confirm("¿Está seguro que desea borrar el proyecto seleccionado?")) {
      this.proyectoService.borrarProyecto(proyecto.idproyecto).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  get Nombre(){
    return this.proyectoForm.get('nombre');
  }

  get Descripcion(){
    return this.proyectoForm.get('descripcion');
  }

  get UrlFoto(){
    return this.proyectoForm.get('urlFoto');
  }

}
