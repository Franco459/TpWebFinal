import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { VehicleService } from '../../services/vehicleservice';

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


  actualizarVeh()
  {
    this.vehService.updateVehiculo(this.modVehicle).subscribe(
      result=>{
        this.cargarVehiculos();
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
        this.arrayVehicles = JSON.parse(result.vehiculo);
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
