import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituicoesAjudadasComponent } from './instituicoes-ajudadas/instituicoes-ajudadas.component';
import { InstituicoesAjudadasRoutes } from './instituicoes-ajudadas.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [InstituicoesAjudadasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(InstituicoesAjudadasRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class InstituicoesAjudadasModule { }
