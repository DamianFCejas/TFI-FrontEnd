import { EducacionService } from './../../service/educacion.service';
import { LoginService } from './../../service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/data/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  educacionList: Educacion[] = [];
  isUserLogged: Boolean = false;

  educationForm: FormGroup;

  constructor(
    
    private educacionService: EducacionService,
    private loginService: LoginService,
    private formBuilder: FormBuilder) {
      
      this.educationForm = this.formBuilder.group({
        ideducacion: [''],
        titulo: ['', [Validators.required, Validators.minLength(6)]],
        estudioFinalizado: ['', [Validators.required]],
        fechaInicio: ['', [Validators.required, Validators.minLength(4)]],
        fechaFin: ['', [Validators.required, Validators.minLength(4)]],
        descripcion: [''],
        img: ['', [Validators.required]],
        institucion: ['', [Validators.required, Validators.minLength(3)]],
        
      });
     
    }

  ngOnInit(): void {
    this.isUserLogged = this.loginService.isUserLogged();
    
    this.reloadData();
  }

  private reloadData() {
    this.educacionService.obtenerDatosEducacion().subscribe(
      (data) => {
        this.educacionList = data;
      }
    );
  }

  private clearForm() {
    this.educationForm.setValue({
      ideducacion: '',
      titulo: '',
      estudioFinalizado: '',
      fechaInicio: '',
      fechaFin: '',
      descripcion: '',
      img: '',
      institucion: ''      
    })
  }

  private loadForm(educacion: Educacion) {
    this.educationForm.setValue({
      ideducacion: educacion.ideducacion,
      titulo: educacion.titulo,
      estudioFinalizado: educacion.estudioFinalizado,
      fechaInicio: educacion.fechaInicio,
      fechaFin: educacion.fechaFin,
      descripcion: educacion.descripcion,
      img: educacion.img,
      institucion: educacion.institucion      
    })
  }

  onSubmit() {
    //console.log(this.educationForm.value);

    
    let educacion: Educacion = this.educationForm.value;
    if (this.educationForm.get('ideducacion')?.value == '') {
      this.educacionService.guardarNuevaEducacion(educacion).subscribe(
        (newEducation: Educacion) => {
          this.educacionList.push(newEducation);
        }
      );
    } else {
      this.educacionService.modificarEducacion(educacion).subscribe(
        () => {
          this.reloadData();
        }
      )
    }      
  }

  onNewEducation() {
    this.clearForm();
  }

  onEditEducation(index: number) {
    let educacion: Educacion = this.educacionList[index];
    this.loadForm(educacion);
  }

  onDeleteEducation(index: number) {
    let educacion: Educacion = this.educacionList[index];
    if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
      this.educacionService.borrarEducacion(educacion.ideducacion).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  

}
