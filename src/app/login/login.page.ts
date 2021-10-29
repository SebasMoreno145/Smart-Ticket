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
  constructor(private authSvc: AuthService, private router: Router) {}

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
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
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  Usuarios: UserDatabase[]=[];

  ngOnInit(): void {
    this.authSvc.obetenerUsuarios().subscribe(resp=>{
      console.log(resp);
      this.Usuarios=resp;
      
    });   
  }

  private redirectUser(isVerified: boolean): void {
    console.log(this.Usuarios);
    if (isVerified) {
      this.router.navigate(['inicio-responsable']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
