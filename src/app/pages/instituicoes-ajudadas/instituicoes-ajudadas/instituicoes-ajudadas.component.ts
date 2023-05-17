import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Instituicao } from 'src/app/models/instituicao/instituicao.model';
import { InstituicaoService } from 'src/app/services/instituicoes';

@Component({
  selector: 'app-instituicoes-ajudadas',
  templateUrl: './instituicoes-ajudadas.component.html',
  styleUrls: ['./instituicoes-ajudadas.component.scss']
})
export class InstituicoesAjudadasComponent implements OnInit {

  instituicoes:Instituicao[]=[];

  constructor(
    private instituicoesServices: InstituicaoService
  ) { }

  ngOnInit() {
    this.instituicoesServices.selectAll().subscribe(
      (instituicaodaresposta)=>{
        console.log(instituicaodaresposta);
        this.instituicoes=instituicaodaresposta;
      },
      (error: HttpErrorResponse)=>{
        console.error(error.message)
      }
    )
  }

}
