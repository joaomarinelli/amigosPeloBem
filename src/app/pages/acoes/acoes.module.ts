import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatProgressBar, MatSelect, MatSelectModule, MatTabsModule } from '@angular/material';
import { AcoesComponent } from './acoes.component';
import { AcoesRoutes } from './acoes.routing';
import { CardAcaoComponent } from './card-acao/card-acao.component';




@NgModule({
  declarations: [AcoesComponent, CardAcaoComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    RouterModule.forChild(AcoesRoutes),
  ],

  exports: []
})
export class AcoesModule { }
