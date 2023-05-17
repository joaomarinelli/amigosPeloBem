import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaTesteComponent } from './pagina-teste.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { PaginaTesteRoutes } from './pagina-teste.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [PaginaTesteComponent, CabecalhoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PaginaTesteRoutes),

    FormsModule,
    ReactiveFormsModule,

    MatSelectModule,
  ],
  exports: []
})
export class PaginaTesteModule { }
