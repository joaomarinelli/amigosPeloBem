import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacoesComponent } from './publicacoes.component';
import { PublicacoesRoutes } from './publicacoes.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormField, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [PublicacoesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicacoesRoutes),

    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
  ],
  exports: []
})
export class PublicacoesModule { }
