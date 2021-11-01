import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioResponsablePageRoutingModule } from './inicio-responsable-routing.module';

import { InicioResponsablePage } from './inicio-responsable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioResponsablePageRoutingModule
  ],
  declarations: [InicioResponsablePage]
})
export class InicioResponsablePageModule {}
