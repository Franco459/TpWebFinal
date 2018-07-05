import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {
  nump = 0; numd = 0; texto = "";
  tamMaximo = 150; longMensaje = 0;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  cambLong(){
    this.longMensaje = this.texto.length;
  }

  enviarMsj(modal){
    this.modalService.open(modal, {centered: true});
  }

  limpiar(){
    this.nump = 0;
    this.numd = 0;
    this.texto = "";
  }
}
