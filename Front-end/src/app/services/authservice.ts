import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from '../models/usuario';

@Injectable()
export class AuthService {
  userLoggedIn : boolean = false;
  nombreLogueado:string;
  perfil:string;
  usuarioLogueado : Usuario;
  constructor(private http:Http) { }

  login(username: string, password: string) {
      return this.http.post('http://localhost/proyectoFinal/web/app_dev.php/usuario/authenticate', JSON.stringify({ username: username, password: password }))
          .map(res => res.json());
  }

  logout() {
      localStorage.removeItem('usuarioLogueado');
      this.userLoggedIn = false;
    this.usuarioLogueado = null;

  } 

}