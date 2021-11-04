import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { UserDatabase } from '../shared/user.database';
import { HttpClient } from '@angular/common/http';
import { InEvento } from '../shared/interfaces';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private url = 'https://smart-ticket-e7c14-default-rtdb.firebaseio.com'

  public user$: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }
  UserDb: UserDatabase = new UserDatabase();
  eventoDB: InEvento;

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerifcationEmail();
      this.UserDb.email = email;
      this.UserDb.rol = '1';
      this.crearUsuario(this.UserDb).subscribe(Resp => { console.log("Se ejecuto.") });
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }



  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async sendVerifcationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  isEmailVerified(user: User): boolean {
    return user.emailVerified === true ? true : false;
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  }

  crearUsuario(user: UserDatabase) {
    console.log('error');
    return this.http.post(
      `${this.url}/Usuarios.json`, user)
      .pipe(
        map((resp: any) => {
          user.email = resp.email;
          return user;
        })
      );
  }

  private crearArreglo(UserObj: object) {
    const UsersA: UserDatabase[] = [];
    Object.keys(UserObj).forEach(key => {
      const User: UserDatabase = UserObj[key];
      UsersA.push(User);
    });
    return UsersA;
  }

  obetenerUsuarios() {
    return this.http.get(`${this.url}/Usuarios.json`)
      .pipe(
        map(this.crearArreglo)
      );
  }

  llamadoCreacionEvento(evento: InEvento) {
    this.crearEvento(evento).subscribe(Resp => { console.log("Se ejecuto.") });
  }

  crearEvento(evento: InEvento) {

    return this.http.post(
      `${this.url}/Evento.json`, evento)
      .pipe(
        map((resp: any) => {
          evento.nombres = resp.nombres;
          return evento;
        })
      );
  }

  obtenerEventos() {
    console.log("llamado a eventos")
    return this.http.get(`${this.url}/Evento.json`)
      .pipe(
        map(this.crearArreglo)
      );
  }


}
