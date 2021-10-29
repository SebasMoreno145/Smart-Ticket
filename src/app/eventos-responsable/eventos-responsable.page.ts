import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eventos-responsable',
  templateUrl: './eventos-responsable.page.html',
  styleUrls: ['./eventos-responsable.page.scss'],
})
export class EventosResponsablePage implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  previusPage(){
    this.route.navigate(["inicio-responsable"])
  }

  nuevoEvento(){
    this.route.navigate(["nuevos-eventos-responsable"])
  }
}
