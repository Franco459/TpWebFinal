import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './componetns/login/login.component';
import { AltaVehiculoComponent } from './componetns/alta-vehiculo/alta-vehiculo.component';
import { AusuariosComponent } from './componetns/ausuarios/ausuarios.component';
import { NovedadesComponent } from './componetns/novedades/novedades.component';
import { ReservaComponent } from './componetns/reserva/reserva.component';




const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'login', component: LoginComponent},
  { path: 'vehiculos', component: AltaVehiculoComponent},
  {path: 'ausuarios', component: AusuariosComponent},
  { path: 'novedades', component:NovedadesComponent},
  { path: 'reserva', component:ReservaComponent}
];

export const Rutas_App = RouterModule.forRoot(routes);