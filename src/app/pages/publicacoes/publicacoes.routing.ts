import { Routes } from '@angular/router';
import { PublicacoesComponent } from './publicacoes.component';

export const PublicacoesRoutes: Routes = [

    {
      path: '',
      component: PublicacoesComponent,
    },
    {
      path: 'publicacao/:id',
      component: PublicacoesComponent,
    },

];
