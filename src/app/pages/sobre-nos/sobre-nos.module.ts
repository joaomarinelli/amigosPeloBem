import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatSelectModule } from '@angular/material';

import { SobreCarouselComponent } from './sobre-carousel/sobre-carousel.component';
import { SobreNosRoutes } from './sobre-nos.routing';
import { SobreUpdateCardComponent } from './sobre-update-card/forms-usuarios.component';

import { SobreCardsUsuarioComponent } from './sobre-cards-usuario/sobre-cards-usuario.component';
import { SobreNosComponent } from './sobre-nos.component';



@NgModule({
  declarations: [SobreNosComponent, SobreUpdateCardComponent, SobreCarouselComponent, SobreCardsUsuarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SobreNosRoutes),

    FormsModule,
    ReactiveFormsModule,

    MatSelectModule,
  ],
  exports: []
})
export class SobreNosModule { }
