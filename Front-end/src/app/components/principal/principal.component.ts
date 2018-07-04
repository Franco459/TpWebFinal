import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { VehicleService } from '../../services/vehicleservice';
import { ReservaService } from '../../services/reservaservice';
import { Reserva } from '../../models/reserva';
import { AuthService } from '../../services/authservice';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [ VehicleService, ReservaService ]
})
export class PrincipalComponent implements OnInit {
  arrayVehicles:Array<Vehiculo>;
  muestraVehicles:Array<Vehiculo>;
  resVehicle:Vehiculo;
  reserva:Reserva;
  constructor(private vehicleService:VehicleService, private reservaService: ReservaService, public authService: AuthService) { 
    this.muestraVehicles = new Array<Vehiculo>(); 
    this.reserva = new Reserva();   
    this.cargarVehiculos();
  }

  cargarVehiculos()
  {
    this.vehicleService.getVehiculo().subscribe(
      result =>{
        this.arrayVehicles = JSON.parse(result.vehiculos);
        for(let obj of this.arrayVehicles)
        {
          if(obj.disponible) this.muestraVehicles.push(obj);
        }
      }
    );
  }

  seleccionarReserva(veh:Vehiculo)
  {
    this.resVehicle = veh;
  }
  agregarReserva()
  {
    this.reserva.usuario = this.authService.usuarioLogueado;
    this.reservaService.createReserva(this.reserva).subscribe(
      data =>
      {
        $('#avisoReserva').html("<div class='alert alert-info'>Se ha realizado la reserva correctamente, ahora espere la respuesta.</div>");
      }
    );
  }

  ngOnInit() {
  }

}
