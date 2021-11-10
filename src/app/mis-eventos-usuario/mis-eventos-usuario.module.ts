import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisEventosUsuarioPageRoutingModule } from './mis-eventos-usuario-routing.module';

import { MisEventosUsuarioPage } from './mis-eventos-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEventosUsuarioPageRoutingModule
  ],
  declarations: [MisEventosUsuarioPage]
})
export class MisEventosUsuarioPageModule {}
