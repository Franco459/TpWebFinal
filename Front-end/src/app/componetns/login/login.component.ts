import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/authservice';
import { Usuario } from '../../models/usuario';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = {};
  usuarioLogueado = {};
  returnUrl: string;
  constructor(private route:ActivatedRoute, private router: Router, private authService:AuthService) {
    this.usuarioLogueado = localStorage.getItem("usuarioLogueado");
    console.log(this.usuarioLogueado);

  }

  
  login()
  {
    this.authService.login(this.loginForm.username, this.loginForm.password).subscribe(
      data => 
      {
        let user = data;
        console.log(user);
        if(user)
        {
          if(user.username != "" && user.activo == false){
            this.authService.userLoggedIn = true;
            localStorage.setItem("usuarioLogueado", JSON.stringify(user));
            localStorage.setItem("perfil", user.perfil);
            this.authService.perfil = user.perfil;
            this.authService.nombreLogueado = user.username;
            this.authService.usuarioLogueado = new Usuario(user.id, user.apellido, user.nombres, user.dni, user.email, user.telefono, user.username, "NELSON", user.perfil);
            this.router.navigateByUrl('');
          }
          else if(user.activo == true)
          {
            $('#alertaLogin').html("<div class='alert alert-danger'>Usuario ya conectado.</div>");            
          }
          else
          {
            $('#alertaLogin').html("<div class='alert alert-danger'>Usuario y/o contraseña incorrectos.</div>");
          }
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';    
  }


}
