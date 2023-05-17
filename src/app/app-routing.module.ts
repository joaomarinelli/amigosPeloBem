import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicoComponent } from './pages/layouts/publico/publico/publico.component';


const routes: Routes = [

    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'doar'
    },
    {
      path: 'aguarde-novidades',
      component: PublicoComponent,
      loadChildren: './pages/aguarde-novidades/aguarde-novidades.module#AguardeNovidadesModule'
    },
    {
      path: 'doar',
      component: PublicoComponent,
      loadChildren: './pages/doar/doar.module#DoarModule'
      // pathMatch: 'full',
      // redirectTo: 'aguarde-novidades'
    },
    {
      path: 'quem-ajudamos',
      // component: PublicoComponent,
      // loadChildren: './pages/quem-ajudamos/quem-ajudamos.module#QuemAjudamosModule'
      pathMatch: 'full',
      redirectTo: 'doar'
    },
    {
      path: 'teste',
      // component: PublicoComponent,
      // loadChildren: './pages/pagina-teste/pagina-teste.module#PaginaTesteModule'
      pathMatch: 'full',
      redirectTo: 'doar'
    },
    {
      path: 'sobre-nos',
      // component: PublicoComponent,
      // loadChildren: './pages/sobre-nos/sobre-nos.module#SobreNosModule'
      pathMatch: 'full',
      redirectTo: 'doar'
    },
    {
      path: 'publicacoes',
      // component: PublicoComponent,
      // loadChildren: './pages/publicacoes/publicacoes.module#PublicacoesModule'
      pathMatch: 'full',
      redirectTo: 'doar'
    },
    {
      path: 'acoes',
      // component: PublicoComponent,
      // loadChildren: './pages/acoes/acoes.module#AcoesModule'
      pathMatch: 'full',
      redirectTo: 'doar'
    },
    {
      path: 'instituicoes-ajudadas',
      // component: PublicoComponent,
      // loadChildren: './pages/instituicoes-ajudadas/instituicoes-ajudadas.module#InstituicoesAjudadasModule'
      pathMatch: 'full',
      redirectTo: 'doar'
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
