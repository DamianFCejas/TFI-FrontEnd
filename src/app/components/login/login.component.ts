import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //username: string = "";
  //password: string = "";
  
  form: FormGroup;
  loginerror: Boolean = false;


  constructor(
    private router:Router, 
    private LoginService:LoginService, 
    //private route: ActivatedRoute,
    private FormBuilder: FormBuilder,

    ) {
      this.form = this.FormBuilder.group(
        {
          username: ['', [Validators.required, Validators.minLength(6)]],
          password: ['', [Validators.required, Validators.minLength(6)]]
        }
      )
     }

  login(event: Event) {
    event.preventDefault;
    
    //console.log(this.form.value);

    (this.LoginService.login(this.form.value)).subscribe(
      (response: Boolean) => {
        if (response)
        this.router.navigate(['/portfolio']);
        else
          this.loginerror = true;
      }
    );
    

    //console.log(this.username);
    //console.log(this.password);
    
    /*
    const user = {username: this.username, password: this.password};
    this.LoginService.login(user).subscribe(data=> {
      console.log(data);
      if(data==null) this.loginerror = "Usuario y/o Contraseña incorrectos!";
      
      else {
        this.loginerror="";
        this.LoginService.setToken(data.id);
        this.router.navigate(['/portfolio'])
      }
    });
    */
  }

  ngOnInit(): void {
  }

  get Username() {
    return this.form.get('username');
  }

  get Password() {
    return this.form.get('password');
  }
  get Email() {
    return this.form.get('email');
  }

}
