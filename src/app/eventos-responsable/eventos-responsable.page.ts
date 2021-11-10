import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { observable } from 'rxjs';


@Component({
  selector: 'app-eventos-responsable',
  templateUrl: './eventos-responsable.page.html',
  styleUrls: ['./eventos-responsable.page.scss'],
})
export class EventosResponsablePage implements OnInit {
  uploadPercent: any;
  constructor(private route: Router,  private storage: AngularFireStorage ) {}


  ngOnInit() {
  }
  
  previusPage(){
    this.route.navigate(["inicio-responsable"])
  }

  nuevoEvento(){
    this.route.navigate(["nuevos-eventos-responsable"])
  }

}
