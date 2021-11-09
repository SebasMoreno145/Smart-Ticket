import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InEvento } from '../shared/interfaces';
import { AuthService } from '../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-nuevos-eventos-responsable',
  templateUrl: './nuevos-eventos-responsable.page.html',
  styleUrls: ['./nuevos-eventos-responsable.page.scss'],
})
export class NuevosEventosResponsablePage implements OnInit {


  newEvento: InEvento = {
    nombres: '',
    imagen: [],
    fecha: new Date(),
    hora: new Date(),
    lugar: '',
    responsable: '',
    descripcion: '',
  }

  constructor(private route: Router, private authSvc:AuthService, private storage: AngularFireStorage  ) { }

 uploadPercent: Observable<number>;
 urlImg: Observable<string>;

  ngOnInit() {
    
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

  imgobj:any[];

  onUpload(e){
    //console.log('subir', e.target.files[0])
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    // const filePath = "upload/imagen.png";
    const filePath = "upload/1";
    const ref = this.storage.ref(filePath)
    const task = this.storage.upload(filePath, file)
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize( () => this.urlImg = ref.getDownloadURL())).subscribe(res =>{
      const getDownloadURL = res;
      // this.imgobj= res;
      console.log("esta es la respuesta"+res);
    });

  }

}


