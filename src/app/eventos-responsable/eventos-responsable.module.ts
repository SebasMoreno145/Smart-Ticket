import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosResponsablePageRoutingModule } from './eventos-responsable-routing.module';

import { EventosResponsablePage } from './eventos-responsable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosResponsablePageRoutingModule
  ],
  declarations: [EventosResponsablePage]
})
export class EventosResponsablePageModule {}
