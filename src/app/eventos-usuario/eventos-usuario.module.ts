import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosUsuarioPageRoutingModule } from './eventos-usuario-routing.module';

import { EventosUsuarioPage } from './eventos-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosUsuarioPageRoutingModule
  ],
  declarations: [EventosUsuarioPage]
})
export class EventosUsuarioPageModule {}
