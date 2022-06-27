import { LoginService } from './../../service/login.service';
import { HyssService } from './../../service/hyss.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Hyss } from './../../data/Hyss';

@Component({
  selector: 'app-hyss',
  templateUrl: './hyss.component.html',
  styleUrls: ['./hyss.component.css']
})
export class HyssComponent implements OnInit {
  hyssList: Hyss[] = [];
  isUserLogged: Boolean = false;

  hyssForm: FormGroup;

  constructor(
    private hyssService: HyssService,
    private loginService: LoginService,
    private formBuilder: FormBuilder) {
      this.hyssForm = this.formBuilder.group({
        idhyss: [''],
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        porcentaje: ['', [Validators.required, Validators.minLength(1)]],
        
      });
     }

  ngOnInit(): void {
    this.isUserLogged = this.loginService.isUserLogged();
    
    this.reloadData();
  }

  private reloadData() {
    this.hyssService.obtenerDatosHyss().subscribe(
      (data) => {
        this.hyssList = data;
      }
    );
  }

  private clearForm() {
    this.hyssForm.setValue({
      idhyss: '',
      nombre: '',
      porcentaje: ''        
    })
  }

  private loadForm(hyss: Hyss) {
    this.hyssForm.setValue({
      idhyss: hyss.idhyss,
      nombre: hyss.nombre,
      porcentaje: hyss.porcentaje
    })
  }

  onSubmit() {

    let hyss: Hyss = this.hyssForm.value;
    if (this.hyssForm.get('idhyss')?.value == '') {
      this.hyssService.guardarNuevoHyss(hyss).subscribe(
        (newHyss: Hyss) => {
          this.hyssList.push(newHyss);
        }
      );
    } else {
      this.hyssService.modificarHyss(hyss).subscribe(
        () => {
          this.reloadData();
        }
      )
    }      
  }

  onNewHyss() {
    this.clearForm();
  }

  onEditHyss(index: number) {
    let hyss: Hyss = this.hyssList[index];
    this.loadForm(hyss);
  }

  onDeleteHyss(index: number) {
    let hyss: Hyss = this.hyssList[index];
    if (confirm("¿Está seguro que desea borrar la habilidad seleccionado?")) {
      this.hyssService.borrarHyss(hyss.idhyss).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  get Nombre(){
    return this.hyssForm.get('nombre');
  }

  get Porcentaje(){
    return this.hyssForm.get('porcentaje');
  }

}
