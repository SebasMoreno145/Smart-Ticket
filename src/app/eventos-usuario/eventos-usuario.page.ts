import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { UserDatabase } from '../shared/user.database';

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

  newEvento: InEvento = {
    nombres: '',
    imagen: null,
    fecha: new Date(),
    hora: new Date(),
    lugar: '',
    responsable: '',
    descripcion: '',
  }

  constructor( private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.obtenerEventos().subscribe(resp=>{
      console.log(resp);
      this.eventosJson = resp;
    });
  }

  async seve() {
    console.log("esto se guarda ", this.newEvento)
    try {
      const data = this.newEvento;
      const user = await this.authSvc.llamadoCreacionEvento(data);
    } catch (error) {
      console.log('Error', error);
    }
  }
}
