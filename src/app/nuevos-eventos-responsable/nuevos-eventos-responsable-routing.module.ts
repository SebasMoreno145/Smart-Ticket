import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevosEventosResponsablePage } from './nuevos-eventos-responsable.page';

const routes: Routes = [
  {
    path: '',
    component: NuevosEventosResponsablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevosEventosResponsablePageRoutingModule {}
