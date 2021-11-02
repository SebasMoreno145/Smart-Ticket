import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/shared/interfaces'
import { DataService } from '../services/data.service';
import { AuthService } from './../services/auth.service';
import { UserDatabase } from '../shared/user.database';

@Component({
  selector: 'app-eventos-usuario',
  templateUrl: './eventos-usuario.page.html',
  styleUrls: ['./eventos-usuario.page.scss'],
})
export class EventosUsuarioPage implements OnInit {

  newEvento: Evento = {
    nombres: 'string',
    imagen: null,
    fecha: new Date(),
    hora: new Date(),
    lugar: 'string',
    responsable: 'string',
    descripcion: 'string',
  }

  constructor(public database: DataService, private authSvc: AuthService) { }

  Usuarios: UserDatabase[]=[];

  ngOnInit(): void {
    this.authSvc.obtenerEventos().subscribe(resp=>{
      console.log(resp);
      this.Usuarios=resp;
    });   
  }

  async seve() {

    try {
      console.log("si envia")
      const user = await this.authSvc.llamadoCreacionEvento();
    } catch (error) {
      console.log('Error', error);
    }

  }

}
