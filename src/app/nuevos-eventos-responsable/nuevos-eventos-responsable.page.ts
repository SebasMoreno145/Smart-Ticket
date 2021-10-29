import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevos-eventos-responsable',
  templateUrl: './nuevos-eventos-responsable.page.html',
  styleUrls: ['./nuevos-eventos-responsable.page.scss'],
})
export class NuevosEventosResponsablePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  previusPageEventosResponsable(){
    this.route.navigate(["eventos-responsable"])
  }

}
