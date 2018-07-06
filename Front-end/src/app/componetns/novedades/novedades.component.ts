import { Component, OnInit } from '@angular/core';
import { Novedad } from '../../models/novedad';
import { NovedadService } from '../../services/novedadservice';
import { AuthService } from '../../services/authservice';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css'],
  providers: [ NovedadService]
})
export class NovedadesComponent implements OnInit {
 
  newNovedad:Novedad;
  arrayNovedades:Array<Novedad>;
  constructor(private novedadService:NovedadService, public authService:AuthService) {
    this.newNovedad = new Novedad();
    
   }
  cargarNovedades()
  {
    this.novedadService.getNovedad().subscribe(
      result =>
      {
        this.arrayNovedades = JSON.parse(result.novedades);
      }
    );
  }

  revisarNovedad(nov:Novedad)
  {
    nov.estado = "procesado";
    this.novedadService.updateNovedad(nov).subscribe(
      result=>
      {
        $('#alertaRevisado').html("<div class='alert alert-info'>Se ha cambiado el estado de la novedad " + nov.id + "</div>");
      }
    );
  }
  
  agregarNovedad()
  {
    this.newNovedad.estado = "pendiente";
    this.newNovedad.Usuario = this.authService.usuarioLogueado;
    this.novedadService.createNovedad(this.newNovedad).subscribe(
      result=>{
        $('#alertaEnviado').html("<div class='alert alert-info'>Se ha enviado su novedad.</div>");
      } );

  }
  ngOnInit() {
  }

}
