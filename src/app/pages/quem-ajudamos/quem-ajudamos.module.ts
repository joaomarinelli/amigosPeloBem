import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemAjudamosComponent } from './quem-ajudamos.component';
import { QuemAjudamosRoutes } from './quem-ajudamos.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [QuemAjudamosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(QuemAjudamosRoutes),

    FormsModule,
    ReactiveFormsModule,

    MatSelectModule,
  ],
  exports: []
})
export class QuemAjudamosModule { }
