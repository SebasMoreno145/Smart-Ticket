import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then((m) => m.VerifyEmailPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'inicio-responsable',
    loadChildren: () => import('./inicio-responsable/inicio-responsable.module').then( m => m.InicioResponsablePageModule)
  },
  {
    path: 'nuevos-eventos-responsable',
    loadChildren: () => import('./nuevos-eventos-responsable/nuevos-eventos-responsable.module').then( m => m.NuevosEventosResponsablePageModule)
  },
  {
    path: 'eventos-responsable',
    loadChildren: () => import('./eventos-responsable/eventos-responsable.module').then( m => m.EventosResponsablePageModule)
  },
  {
    path: 'inicio-usuario',
    loadChildren: () => import('./inicio-usuario/inicio-usuario.module').then( m => m.InicioUsuarioPageModule)
  },
  {
    path: 'eventos-usuario',
    loadChildren: () => import('./eventos-usuario/eventos-usuario.module').then( m => m.EventosUsuarioPageModule)
  },
  {
    path: 'mis-eventos-usuario',
    loadChildren: () => import('./mis-eventos-usuario/mis-eventos-usuario.module').then( m => m.MisEventosUsuarioPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
