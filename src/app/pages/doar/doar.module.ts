import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoarComponent } from './doar.component';
import { DoarRoutes } from './doar.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [DoarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DoarRoutes),

    FormsModule,
    ReactiveFormsModule,

    MatSelectModule,
  ],
  exports: []
})
export class DoarModule { }
