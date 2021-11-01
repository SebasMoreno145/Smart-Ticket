import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevosEventosResponsablePageRoutingModule } from './nuevos-eventos-responsable-routing.module';

import { NuevosEventosResponsablePage } from './nuevos-eventos-responsable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevosEventosResponsablePageRoutingModule
  ],
  declarations: [NuevosEventosResponsablePage]
})
export class NuevosEventosResponsablePageModule {}
