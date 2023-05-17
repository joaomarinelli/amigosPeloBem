import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { Acao } from "src/app/models/acao/acao.model";
import { AcaoService } from "src/app/services/acao.service";

@Component({
    selector: 'acoes',
    templateUrl: './acoes.component.html',
    styleUrls: ['./acoes.component.scss']
})

export class AcoesComponent implements OnInit{

    acoes: Acao[] = [];
    acoesConcluidas: Acao[] = [];

    
    constructor(
        private acaoService: AcaoService,
    
    ){}

    ngOnInit(): void {

        this.buscaTodasAcoes();
    }

      buscaTodasAcoes(){
        this.acaoService.selectAll().subscribe(
          (acoesRetorno)=>{
            if(acoesRetorno && acoesRetorno.length>0){
              //this.acoes = acoesRetorno;
              this.separaAcoesConcluidasEFuturas(acoesRetorno)
              
              
            }
          },
          (err: HttpErrorResponse)=>{
            console.error(err.message);
          }
        )
      }



      separaAcoesConcluidasEFuturas(acoes: Acao[]){
        acoes.forEach(acao=>{
          let dataAcao = new Date(acao.dataEHora)
          if(dataAcao > new Date()){
            this.acoes = this.acoes.concat([acao]);
          }
          else{
            this.acoesConcluidas = this.acoesConcluidas.concat([acao])
          }
        })
        this.ordernarAcoesConcluidas();
        this.ordernarAcoesFuturas();
      }

      ordernarAcoesConcluidas() {
        this.acoesConcluidas.sort((acao1, acao2) => {
          if ((new Date(acao1.dataEHora)) < (new Date(acao2.dataEHora))) {
            return 1;
          }
          else if ((new Date(acao1.dataEHora)) > (new Date(acao2.dataEHora))) {
            return -1;
          }
          else {
            return 0;
          }
        })
      }

      ordernarAcoesFuturas() {
        this.acoes.sort((acao1, acao2) => {
          if ((new Date(acao1.dataEHora)) > (new Date(acao2.dataEHora))) {
            return 1;
          }
          else if ((new Date(acao1.dataEHora)) < (new Date(acao2.dataEHora))) {
            return -1;
          }
          else {
            return 0;
          }
        })
      }
}