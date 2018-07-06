import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuarioservice';
declare var jquery:any;  
declare var $:any;

@Component({
  selector: 'app-ausuarios',
  templateUrl: './ausuarios.component.html',
  styleUrls: ['./ausuarios.component.css'],
  providers: [ UsuarioService ]
})
export class AusuariosComponent implements OnInit {

  newUsuario :Usuario;
  modUsuario : Usuario;
  arrayUsuarios: Array<Usuario>;
  
  constructor(private userService:UsuarioService) {
    this.newUsuario = new Usuario();
    this.modUsuario = new Usuario();
    this.cargarUsuarios();
   }

  agregarUsuario()
  {
    this.userService.createUsuario(this.newUsuario).subscribe(
      result =>{
        this.cargarUsuarios();
        $('#avisoAgregado').html("<div class='alert alert-info'>Se ha agregado con éxito un usuario</div>");
      }
    );

  }
  actualizarUsuario()
  {
    this.userService.updateUsuario(this.modUsuario).subscribe(
      data =>
      {
        this.cargarUsuarios();
        $('#avisoActualizado').html("<div class='alert alert-info'>Se ha actualizado el usuario '" + this.modUsuario.usuario +"' </div>");
     
      }
    );
  }
  borrarUsuario(del:Usuario)
  {
    this.userService.eliminarUsuario(del).subscribe(
      data=>{
        $('#avisoBorrado').html("<div class='alert alert-info'>Se ha borrado el usuario '" + del.usuario +"' </div>");
        this.cargarUsuarios();
      },
      error=>
      {

      }
    );
  }

  modificarUsuario(mod:Usuario)
  {
    this.modUsuario = new Usuario(mod.id, mod.apellido, mod.nombres, mod.dni, mod.email, mod.telefono, mod.usuario, mod.password, mod.perfil);
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
