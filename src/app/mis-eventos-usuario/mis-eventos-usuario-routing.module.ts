import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEventosUsuarioPage } from './mis-eventos-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: MisEventosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEventosUsuarioPageRoutingModule {}
