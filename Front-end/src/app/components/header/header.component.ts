import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }
  usuarioLogueado = {};
  
  constructor(public authenticationService:AuthService, private router: Router) { 
    this.usuarioLogueado = localStorage.getItem("usuarioLogueado");

  }


  logout()
  {
    localStorage.removeItem("usuarioLogueado");
    this.authenticationService.logout();
    this.usuarioLogueado = {};
    this.router.navigateByUrl('');
  }


}
