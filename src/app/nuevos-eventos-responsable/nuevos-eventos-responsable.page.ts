import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../shared/interfacesEventos';


@Component({
  selector: 'app-nuevos-eventos-responsable',
  templateUrl: './nuevos-eventos-responsable.page.html',
  styleUrls: ['./nuevos-eventos-responsable.page.scss'],
})
export class NuevosEventosResponsablePage implements OnInit {

  // eventosJson: any[];
  // Usuarios: Item[]=[];

  newEventoResponsable: Item = {
    Descripcion: '',
    Nombre: '',
    Lugar: '',
    Fecha: new Date,
    Responsable: '',
    imagen: []
  }

  constructor(private route: Router) { }

  ngOnInit() {
    
  }

  previusPageEventosResponsable(){
    this.route.navigate(["eventos-responsable"])
  }

}


