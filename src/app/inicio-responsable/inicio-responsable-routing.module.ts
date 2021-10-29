import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioResponsablePage } from './inicio-responsable.page';

const routes: Routes = [
  {
    path: '',
    component: InicioResponsablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioResponsablePageRoutingModule {}
