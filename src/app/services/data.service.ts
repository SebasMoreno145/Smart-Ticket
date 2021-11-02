import { Injectable } from '@angular/core';
import { AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public Firestore: AngularFirestore) { }

  CreateDoucument<tipo> (data: tipo, enlace: string){
    const ref = this.Firestore.collection<tipo>(enlace);
    return ref.add(data)

  }
}
