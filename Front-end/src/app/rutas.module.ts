import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './componetns/login/login.component';




const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'login', component: LoginComponent},
  //{ path: 'login', component: LoginComponent},
];

export const Rutas_App = RouterModule.forRoot(routes);