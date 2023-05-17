import { Routes } from '@angular/router';
import { QuemAjudamosComponent } from './quem-ajudamos.component';

export const QuemAjudamosRoutes: Routes = [

    {
      path: '',
      component: QuemAjudamosComponent,
    },
    {
      path: 'usuario/:id',
      component: QuemAjudamosComponent,
    },

];
