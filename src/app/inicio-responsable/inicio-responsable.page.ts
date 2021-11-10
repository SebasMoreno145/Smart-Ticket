import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-responsable',
  templateUrl: './inicio-responsable.page.html',
  styleUrls: ['./inicio-responsable.page.scss'],
})
export class InicioResponsablePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  nextpage(){
    this.route.navigate(["eventos-responsable"])
  }

  

  

}
