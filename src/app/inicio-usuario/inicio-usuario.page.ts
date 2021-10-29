import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.page.html',
  styleUrls: ['./inicio-usuario.page.scss'],
})
export class InicioUsuarioPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  Eventospage() {
    this.route.navigate(['eventos-usuario']);
  }
  MisEntradaspage() {
    this.route.navigate(['mis-eventos-usuario']);
  }
  logout() {
    this.route.navigate(['eventos-usuario']);
  }

}
