import { Routes } from '@angular/router';
import { SobreNosComponent } from './sobre-nos.component';
import { SobreUpdateCardComponent } from './sobre-update-card/forms-usuarios.component';


export const SobreNosRoutes: Routes = [

      {
        path: '',
        component: SobreNosComponent,
      },
      {
        path: 'update/:id',
        component: SobreUpdateCardComponent,
      },
      {
        path: 'update',
        component: SobreUpdateCardComponent,
      },

];
