import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDatabase } from '../shared/user.database';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private authSvc: AuthService, private router: Router) { }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified, email.value);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        //this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  Usuarios: readonly UserDatabase[] = [];

  ngOnInit(): void {
    this.authSvc.obetenerUsuarios().subscribe(resp => {
      console.log(resp);
<<<<<<< HEAD
      this.Usuarios = resp;

    });
=======
      this.Usuarios=resp;
    });   
>>>>>>> 26fb5e0e36217beae75914b96f60e434d0964919
  }


  private redirectUser(isVerified: boolean, email: string): void {
    console.log(this.Usuarios);
    console.log(email);
    const usuario = this.Usuarios.find(e => e.email === email);
    if (isVerified) {
<<<<<<< HEAD
      switch (usuario.rol) {
        case '1':
          this.router.navigate(['admin']);
          break;
        case '2':
          this.router.navigate(['home']);
          break;
        default:
          console.log("Usuario sin rol");
          break;
      }
=======
      
      this.router.navigate(['inicio-usuario']);
>>>>>>> 26fb5e0e36217beae75914b96f60e434d0964919
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
