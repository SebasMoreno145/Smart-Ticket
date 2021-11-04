import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { UserDatabase } from '../shared/user.database';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
<<<<<<< HEAD
=======
import { InEvento } from '../shared/interfaces';
>>>>>>> 45aafdacc3fc3ea4fcebf56e9a3efff900396d9c

@Component({
  selector: 'app-eventos-usuario',
  templateUrl: './eventos-usuario.page.html',
  styleUrls: ['./eventos-usuario.page.scss'],
})
export class EventosUsuarioPage implements OnInit {

  eventosJson: any[];
<<<<<<< HEAD
  Usuarios: UserDatabase[]=[];

  newEvento: Evento = {
    nombres: 'string',
=======

  
  newEvento: InEvento = {
    nombres: '',
>>>>>>> 45aafdacc3fc3ea4fcebf56e9a3efff900396d9c
    imagen: null,
    fecha: new Date(),
    hora: new Date(),
    lugar: '',
    responsable: '',
    descripcion: '',
  }

<<<<<<< HEAD
  constructor(public database: DataService, private authSvc: AuthService) { }
=======
  constructor( private authSvc: AuthService) { }
>>>>>>> 45aafdacc3fc3ea4fcebf56e9a3efff900396d9c

  ngOnInit(): void {
    this.authSvc.obtenerEventos().subscribe(resp=>{
      console.log(resp);
      this.eventosJson = resp;
    });
  }

  async seve() {
<<<<<<< HEAD
=======
    console.log("esto se guarda ", this.newEvento)
>>>>>>> 45aafdacc3fc3ea4fcebf56e9a3efff900396d9c
    try {
      const data = this.newEvento;
      const user = await this.authSvc.llamadoCreacionEvento(data);
    } catch (error) {
      console.log('Error', error);
    }
  }
}
