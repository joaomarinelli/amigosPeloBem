import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { Routes } from '@angular/router';
import { PaginaTesteComponent } from './pagina-teste.component';

export const PaginaTesteRoutes: Routes = [

    {
      path: '',
      component: PaginaTesteComponent,
    },
    // {
    //   path: 'cabecalho',
    //   component: CabecalhoComponent,
    // },
    {
      path: 'usuario/:id',
      component: PaginaTesteComponent,
    },

];
