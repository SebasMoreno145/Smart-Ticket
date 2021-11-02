import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../shared/user.interface';


@Component({
  selector: 'app-nuevos-eventos-responsable',
  templateUrl: './nuevos-eventos-responsable.page.html',
  styleUrls: ['./nuevos-eventos-responsable.page.scss'],
})
export class NuevosEventosResponsablePage implements OnInit {

  newItem: Item = {
    Descripcion : '',
    Nombre : '',
    Lugar : '',
    Fecha: null,
    Responsable: ''
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }

  previusPageEventosResponsable(){
    this.route.navigate(["eventos-responsable"])
  }

}
