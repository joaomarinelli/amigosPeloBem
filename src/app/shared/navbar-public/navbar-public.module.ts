import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPublicComponent } from './navbar-public.component';



@NgModule({
  declarations: [
    NavbarPublicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarPublicComponent
  ]
})
export class NavbarPublicModule { }
