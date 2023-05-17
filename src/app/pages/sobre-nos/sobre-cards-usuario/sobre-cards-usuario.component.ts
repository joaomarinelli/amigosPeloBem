import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-sobre-cards-usuario',
  templateUrl: './sobre-cards-usuario.component.html',
  styleUrls: ['./sobre-cards-usuario.component.scss']
})
export class SobreCardsUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];


  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscaTodasPessoas();

  }

  buscaTodasPessoas(){
    this.usuariosService.selectAll().subscribe(
      (objetosDaResposta)=>{

          this.usuarios = objetosDaResposta

      })
  }

  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }




}
