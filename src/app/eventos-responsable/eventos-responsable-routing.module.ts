import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosResponsablePage } from './eventos-responsable.page';

const routes: Routes = [
  {
    path: '',
    component: EventosResponsablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosResponsablePageRoutingModule {}
