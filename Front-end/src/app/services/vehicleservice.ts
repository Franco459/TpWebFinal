import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class VehicleService {
    constructor(private _http: Http) {

    }
    getVehiculo()
    {
        return this._http.get("http://localhost/proyectoFinal/web/app_dev.php/vehiculo/")
        .map(res => res.json());
    }

    createVehiculo(vehiculo) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(vehiculo);
        return this._http.post('http://localhost/proyectoFinal/web/app_dev.php/vehiculo/new', body, options).map((res: Response) => res.json());
    }
    
    updateVehiculo(vehiculo)
    {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(vehiculo);
      let postURL = "http://localhost/proyectoFinal/web/app_dev.php/vehiculo/" + vehiculo.id + "/edit"
      return this._http.post(postURL, body, options).map((res: Response) => res.json());
    }
    eliminarVehiculo(vehiculo)
    {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(vehiculo);
  
      let postURL = "http://localhost/proyectoFinal/web/app_dev.php/vehiculo/"+vehiculo.id;
      return this._http.delete(postURL, options).map((res: Response) => res.json());
    }
    

}