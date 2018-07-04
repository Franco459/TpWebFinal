import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsuarioService {
    constructor(private _http: Http) {

    }
    getUsuario()
    {
        return this._http.get("http://localhost/proyectoFinal/web/app_dev.php/usuario/")
        .map(res => res.json());
    }

    createUsuario(usuario) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(usuario);
        return this._http.post('http://localhost/proyectoFinal/web/app_dev.php/usuario/new', body, options).map((res: Response) => res.json());
    }
    
    updateUsuario(usuario)
    {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(usuario);
      let postURL = "http://localhost/proyectoFinal/web/app_dev.php/usuario/" + usuario.id + "/edit"
      return this._http.post(postURL, body, options).map((res: Response) => res.json());
    }

    eliminarUsuario(usuario)
    {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(usuario);
  
      let postURL = "http://localhost/proyectoFinal/web/app_dev.php/usuario/"+usuario.id;
      return this._http.delete(postURL, options).map((res: Response) => res.json());
    }
    

}