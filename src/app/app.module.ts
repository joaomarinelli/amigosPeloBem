import { NavbarModule } from './shared/navbar/navbar.module';
import { PaginaTesteModule } from './pages/pagina-teste/pagina-teste.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './pages/main/main.module';
import { ColetaModule } from './pages/coleta/coleta/coleta.module';
import { PublicoComponent } from './pages/layouts/publico/publico/publico.component';
import { UsuarioLayoutComponent } from './pages/layouts/usuario-layout/usuario-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterPublicComponent } from './shared/footer-public/footer-public.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarPublicModule } from './shared/navbar-public/navbar-public.module';



@NgModule({
  declarations: [
    AppComponent,
    PublicoComponent,
    UsuarioLayoutComponent,
    FooterPublicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    NavbarModule,
    ColetaModule,
    PaginaTesteModule,
    HttpClientModule,
    NavbarPublicModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
