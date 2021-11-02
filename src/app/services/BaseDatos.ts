import { Injectable } from "@angular/core";
import { AngularFirestore,
AngularFirestoreDocument,
AngularFirestoreCollection} from "@angular/fire/firestore";

@Injectable({
    providedIn:'root'
})

export class BasedatosService{
    constructor(public FireDatabase: AngularFirestore) {}

    crearEvento<tipo>(data: tipo, enlace:string){  
        const ref  =  this.FireDatabase.collection<tipo>(enlace);
            return ref.add(data);
    }

    EliminarEvento(){

    }


    getEvento(){

    }

    modificarEvento(){

    }

}