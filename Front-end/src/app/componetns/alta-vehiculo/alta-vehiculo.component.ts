import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { VehicleService } from '../../services/vehicleservice';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-alta-vehiculo',
  templateUrl: './alta-vehiculo.component.html',
  styleUrls: ['./alta-vehiculo.component.css'],
  providers: [ VehicleService ]
})
export class AltaVehiculoComponent implements OnInit {

  arrayVehicles:Array<Vehiculo>;
  newVehicle:Vehiculo;
  modVehicle:Vehiculo;
  constructor(private vehService:VehicleService) { 
    this.cargarVehiculos();
    this.newVehicle = new Vehiculo();
    this.modVehicle = new Vehiculo();
    
  }

  borrarVehiculo(veh:Vehiculo){
    this.vehService.eliminarVehiculo(veh).subscribe(
      data =>
      {
        this.cargarVehiculos();
        $('#avisoBorrado').html("<div class='alert alert-info'>Se ha borrado con éxito el vehículo ID " + veh.id + " </div>");
      }
    );
  }
  actualizarVeh()
  {
    this.vehService.updateVehiculo(this.modVehicle).subscribe(
      result=>{
        this.cargarVehiculos();
        $('#avisoModificado').html("<div class='alert alert-info'>Se ha modificado con éxito el vehículo ID " + this.modVehicle.id + " </div>");

      },
      error =>{

      }
    );
  }
  modificarVeh(veh:Vehiculo)
  {
    this.modVehicle = new Vehiculo(veh.id, veh.patente, veh.marca, veh.modelo, veh.pathimagen, veh.disponible);
  }

  cargarVehiculos()
  {
    this.vehService.getVehiculo().subscribe(
      result=>{
        this.arrayVehicles = JSON.parse(result.vehiculos);
      },
      error =>{

      }
    );
  }
  agregarVehiculo(){
    this.vehService.createVehiculo(this.newVehicle).subscribe(
      data =>
      {
        this.cargarVehiculos();
      },
      error =>{

      }
    );
  }
  ngOnInit() {
  }

}
