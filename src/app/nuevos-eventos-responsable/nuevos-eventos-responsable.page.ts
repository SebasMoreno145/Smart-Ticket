import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InEvento } from '../shared/interfaces';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-nuevos-eventos-responsable',
  templateUrl: './nuevos-eventos-responsable.page.html',
  styleUrls: ['./nuevos-eventos-responsable.page.scss'],
})
export class NuevosEventosResponsablePage implements OnInit {


  newEvento: InEvento = {
    id:'',
    nombres: '',
    imagen: null,
    fecha: new Date(),
    hora: new Date(),
    lugar: '',
    responsable: '',
    descripcion: '',
  }

  constructor(private route: Router, private authSvc:AuthService) { }

  eventosJson: any[];

  ngOnInit() {
    this.authSvc.obtenerEventos().subscribe(resp=>{
      console.log(resp);
      this.eventosJson = resp;
      this.authSvc.cantidad = this.eventosJson.length;
      console.log("cantidad de nuevos onit = " + this.eventosJson.length);

      //this.eventosJson = this.eventosJson.filter(obj => obj !== this.eventosJson[0])
    });
  }

  previusPageEventosResponsable(){
    this.route.navigate(["eventos-responsable"])
  }

  async crearEvento() {
    console.log("esto se guarda ", this.newEvento)
    try {
      const data = this.newEvento;
      const user = await this.authSvc.llamadoCreacionEvento(data);
    } catch (error) {
      console.log('Error', error);
    }
  }

}


