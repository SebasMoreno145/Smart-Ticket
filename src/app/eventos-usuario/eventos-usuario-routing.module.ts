import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosUsuarioPage } from './eventos-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: EventosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosUsuarioPageRoutingModule {}
