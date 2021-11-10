import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { UserDatabase } from '../shared/user.database';
import { MisEventosUsuarioPage } from '../mis-eventos-usuario/mis-eventos-usuario.page';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { InEvento } from '../shared/interfaces';


@Component({
  selector: 'app-eventos-usuario',
  templateUrl: './eventos-usuario.page.html',
  styleUrls: ['./eventos-usuario.page.scss'],
})

export class EventosUsuarioPage implements OnInit {

  eventosJson: any[];
  eventoJson: any[];

  newEvento: InEvento = {
    id: '',
    nombres: '',
    imagen: null,
    fecha: null,
    hora: null,
    lugar: '',
    responsable: '',
    descripcion: '',
  }

  constructor(private authSvc: AuthService, private misEven: MisEventosUsuarioPage) { }

  ngOnInit(): void {
    this.authSvc.obtenerEventos().subscribe(resp => {
      this.eventosJson = resp;
      this.eventosJson = this.eventosJson.filter(obj => obj !== this.eventosJson[0])
    });
  }



  async getEvento(id: string) {
    this.authSvc.obtenerEvento(id).subscribe(resp => {
      this.eventoJson = resp;
      this.newEvento.descripcion = this.eventoJson[0];
      this.newEvento.fecha = this.eventoJson[1];
      this.newEvento.hora = this.eventoJson[2];
      this.newEvento.id = this.eventoJson[3]
      this.newEvento.lugar = this.eventoJson[4];
      this.newEvento.nombres = this.eventoJson[5];
      this.newEvento.responsable = this.eventoJson[6];
    });
  }

  compraTicket(id: string){
    console.log(id);
    this.misEven
    
  }




}
