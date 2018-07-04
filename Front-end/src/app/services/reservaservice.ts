import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReservaService {
    constructor(private _http: Http) {

    }
    getReserva()
    {
        return this._http.get("http://localhost/proyectoFinal/web/app_dev.php/reserva/")
        .map(res => res.json());
    }

    createReserva(reserva) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(reserva);
        return this._http.post('http://localhost/proyectoFinal/web/app_dev.php/reserva/new', body, options).map((res: Response) => res.json());
    }
    
    updateReserva(reserva)
    {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(reserva);
      let postURL = "http://localhost/proyectoFinal/web/app_dev.php/reserva/" + reserva.id + "/edit"
      return this._http.post(postURL, body, options).map((res: Response) => res.json());
    }
    eliminarReserva(reserva)
    {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(reserva);
  
      let postURL = "http://localhost/proyectoFinal/web/app_dev.php/reserva/"+reserva.id;
      return this._http.delete(postURL, options).map((res: Response) => res.json());
    }
    

}