import { AguardeNovidadesRoutes } from './aguarde-novidades.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AguardeNovidadesComponent } from './aguarde-novidades.component';



@NgModule({
  declarations: [AguardeNovidadesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AguardeNovidadesRoutes),
  ]
})
export class AguardeNovidadesModule { }
