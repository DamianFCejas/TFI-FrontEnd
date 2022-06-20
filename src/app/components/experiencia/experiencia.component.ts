import { LoginService } from './../../service/login.service';
import { ExperienciaService } from './../../service/experiencia.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/data/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList: Experiencia[] = [];
  isUserLogged: Boolean = false;

  experForm: FormGroup;


  constructor(
    private experienciaService: ExperienciaService,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.experForm = this.formBuilder.group({
      idexperiencia: [''],
      descripcion: [''],
      empresa: ['', [Validators.required, Validators.minLength(3)]],
      esTrabajoActual: [''],
      fechaFin: [''],
      fechaInicio: ['', [Validators.required, Validators.minLength(4)]],
      tipoEmpleo: ['', [Validators.required, Validators.minLength(3)]]
    });
   }

  ngOnInit(): void {
    this.isUserLogged = this.loginService.isUserLogged();
    
    this.reloadData();
  }

  private reloadData() {
    this.experienciaService.obtenerDatosExperiencia().subscribe(
      (data) => {
        this.experienciaList = data;
      }
    );
  }

  private clearForm() {
    this.experForm.setValue({
      idexperiencia: '',
      descripcion: '',
      empresa: '',
      esTrabajoActual: '',
      fechaFin: '',
      fechaInicio: '',
      tipoEmpleo: ''     
    })
  }

  private loadForm(experiencia: Experiencia) {
    this.experForm.setValue({
      idexperiencia: experiencia.idexperiencia,
      descripcion: experiencia.descripcion,
      empresa: experiencia.empresa,
      esTrabajoActual: experiencia.esTrabajoActual,
      fechaFin: experiencia.fechaFin,
      fechaInicio: experiencia.fechaInicio,
      tipoEmpleo: experiencia.tipoEmpleo      
    })
  }

  onSubmit() {
    
    
    let experiencia: Experiencia = this.experForm.value;
    if (this.experForm.get('idexperiencia')?.value == '') {
      this.experienciaService.guardarNuevaExperiencia(experiencia).subscribe(
        (newExperiencia: Experiencia) => {
          this.experienciaList.push(newExperiencia);
        }
      );
    } else {
      this.experienciaService.modificarExperiencia(experiencia).subscribe(
        () => {
          this.reloadData();
        }
      )
    }      
  }

  onNewExperiencia() {
    this.clearForm();
  }

  onEditExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    this.loadForm(experiencia);
  }

  onDeleteExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    if (confirm("¿Está seguro que desea borrar la experiencia seleccionada?")) {
      this.experienciaService.borrarExperiencia(experiencia.idexperiencia).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  get Empresa() {
    return this.experForm.get('empresa');
  }
  get FechaInicio() {
    return this.experForm.get('fechaInicio');
  }
  get TipoEmpleo() {
    return this.experForm.get('tipoEmpleo');
  }

}
