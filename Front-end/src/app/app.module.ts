import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componetns/login/login.component';
import { AltaVehiculoComponent } from './componetns/alta-vehiculo/alta-vehiculo.component';
import { MuestraVehiculosComponent } from './componetns/muestra-vehiculos/muestra-vehiculos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Rutas_App } from './rutas.module';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/authservice';
import { DataTableModule } from 'angular2-datatable';
import { AusuariosComponent } from './componetns/ausuarios/ausuarios.component';
import { NovedadesComponent } from './componetns/novedades/novedades.component';
import { ReservaComponent } from './componetns/reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AltaVehiculoComponent,
    MuestraVehiculosComponent,
    PrincipalComponent,
    HeaderComponent,
    AusuariosComponent,
    NovedadesComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, Rutas_App, DataTableModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
