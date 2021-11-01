import { Component, OnInit } from '@angular/core';
import {Evento} from 'src/app/shared/interfaces'

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

  constructor() { }

  ngOnInit() {
  }

}
