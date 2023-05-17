import { PessoaService } from './../../services/pessoa.service';
import { Pessoa } from './../../models/pessoa/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quem-ajudamos',
  templateUrl: './quem-ajudamos.component.html',
  styleUrls: ['./quem-ajudamos.component.scss']
})
export class QuemAjudamosComponent implements OnInit {

  pessoas: Pessoa[] = [];
  public form: FormGroup;


  controleDeFormDosusuariosSelecionadosDaLista = new FormControl('');

  constructor(
    private pessoaService: PessoaService,
  ) { }

  ngOnInit() {

    this.buscaTodasPessoas();
  }

  buscaTodasPessoas(){
    this.pessoaService.selectAll().subscribe(
      (objetosDaResposta)=>{
        if(objetosDaResposta && objetosDaResposta.length>0){
          this.pessoas = objetosDaResposta;
        }
      },
      (err: HttpErrorResponse)=>{
        console.error(err.message);
      }
    )
  }

  verificaSeContemDados(dado){

    if(!!dado){
      return dado;
    }else{
      return "N/I"
    }

  }

  getDateBr(isoDate: string){
    return new Date(isoDate).toLocaleDateString('pt-br')
  }


}
