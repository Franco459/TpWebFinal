import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Vehiculo } from '../../models/vehiculo';
import { Reserva } from '../../models/reserva';
import { UsuarioService } from '../../services/usuarioservice';
import { ReservaService } from '../../services/reservaservice';
import { VehicleService } from '../../services/vehicleservice';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
  providers: [ UsuarioService, ReservaService, VehicleService]
})
export class ReservaComponent implements OnInit {
  arrayUsuarios:Array<Usuario>;
  arrayReservas:Array<Reserva>;
  arrayVehicles:Array<Vehiculo>;
  newReserva:Reserva;
  modReserva:Reserva;
  vehID:number;
  usuarioID:number;

  constructor(private userService:UsuarioService, private reservaService:ReservaService, private vehService:VehicleService) { 
    this.modReserva = new Reserva();
    this.newReserva = new Reserva();
    this.cargarUsuarios();
    this.cargarReservas();
    this.cargarVehiculos();
  }


  borrarReserva(del:Reserva){
    this.reservaService.eliminarReserva(del).subscribe(
      data=>
      {
        $('#avisoBorrado').html("<div class='alert alert-info'>Se ha borrado la reserva " + this.modReserva.id + "</div>");
        this.cargarReservas();        
      }
    );
  }
  actualizarReserva()
  {
    let veh:Vehiculo;
    let user:Usuario;
    for(veh of this.arrayVehicles)
    {
      if(veh.id == this.vehID) break;
    }
    for(user of this.arrayUsuarios)
    {
      if(user.id == this.usuarioID) break;
    }
    this.modReserva.usuario = user;
    this.modReserva.vehiculo = veh;

    this.reservaService.updateReserva(this.modReserva).subscribe(
      data =>
      {
        $('#avisoModificado').html("<div class='alert alert-info'>Se ha modificado con éxito la reserva " + this.modReserva.id + "</div>");
        this.cargarReservas();
        
      }
    );
  }

  modificarReserva(mod:Reserva)
  {
    this.modReserva = mod;
  }

  agregarReserva()
  {
    let veh:Vehiculo;
    let user:Usuario;
    for(veh of this.arrayVehicles)
    {
      if(veh.id == this.vehID) break;
    }
    for(user of this.arrayUsuarios)
    {
      if(user.id == this.usuarioID) break;
    }
    this.newReserva.usuario = user;
    this.newReserva.vehiculo = veh;

    this.reservaService.createReserva(this.newReserva).subscribe(
      result =>
      {
        $('#avisoAgregado').html("<div class='alert alert-info'>Se ha agregado una nueva reserva</div>");
        this.cargarReservas();
      }
    );
  }
  
  cargarReservas()
  {
    this.reservaService.getReserva().subscribe(
      result =>
      {
        this.arrayReservas = JSON.parse(result.reservas);
      },
      error =>
      {
        console.error(error);
      }
    );
  }
  cargarVehiculos()
  {
    this.vehService.getVehiculo().subscribe(
      result=>{
        this.arrayVehicles = JSON.parse(result.vehiculo);
      },
      error =>{

      }
    );
  }
  cargarUsuarios()
  {
    this.userService.getUsuario().subscribe(
      result =>
      {
        this.arrayUsuarios = JSON.parse(result.usuarios);
      },
      error =>
      {
        console.error(error);
      }
    );
  }

  ngOnInit() {
  }

}
