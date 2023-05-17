import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Publicacao } from 'src/app/models/publicacao/publicacao.model';
import { PublicacaoService } from 'src/app/services/publicacao.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss']
})
export class PublicacoesComponent implements OnInit {


  publicacoes: Publicacao[] = [];
  public form: FormGroup;


  constructor(
    private publicacaoService: PublicacaoService,
    // private metaService: Meta
  ) {
    // this.metaService.updateTag( { property: 'og:image', content: 'https://instagram.fpoa18-1.fna.fbcdn.net/v/t51.2885-15/294370578_460719502550337_3084845725570308294_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fpoa18-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=YZ_SzdSLKkMAX8qN90M&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NTgzODE5ODQ2OTIzOTgyMw%3D%3D.2-ccb7-5&oh=00_AT_ljB_yHlrDKIWbmOIzXWXOzPmr5T9rGkVAOXvl17UQqg&oe=633D2745&_nc_sid=30a2ef' } );
   }

  ngOnInit() {
    // this.metaService.updateTag( { property: 'og:image', content: 'https://instagram.fpoa18-1.fna.fbcdn.net/v/t51.2885-15/294370578_460719502550337_3084845725570308294_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fpoa18-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=YZ_SzdSLKkMAX8qN90M&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NTgzODE5ODQ2OTIzOTgyMw%3D%3D.2-ccb7-5&oh=00_AT_ljB_yHlrDKIWbmOIzXWXOzPmr5T9rGkVAOXvl17UQqg&oe=633D2745&_nc_sid=30a2ef' } );
    this.buscaTodasPublicacoes();

  }

  ordernarAntigoParaRecente() {
    this.publicacoes.sort((p1, p2) => {
      if ((new Date(p1.created)) < (new Date(p2.created))) {
        return -1;
      }
      else if ((new Date(p1.created)) > (new Date(p2.created))) {
        return 1;
      }
      else {
        return 0;
      }
    })
  }

  ordernarRecenteParaAntigo() {
    this.publicacoes.sort((p1, p2) => {
      if ((new Date(p1.created)) < (new Date(p2.created))) {
        return 1;
      }
      else if ((new Date(p1.created)) > (new Date(p2.created))) {
        return -1;
      }
      else {
        return 0;
      }
    })
  }

  buscaTodasPublicacoes() {
    this.publicacaoService.selectAll().subscribe(
      (objetosDaResposta) => {
        if (objetosDaResposta && objetosDaResposta.length > 0) {
          this.publicacoes = objetosDaResposta;
        }
      },
      (err: HttpErrorResponse) => {
        console.error(err.message);
      }
    )
  }

  verificaSeContemDados(dado) {

    if (!!dado) {
      return dado;
    } else {
      return "N/I"
    }

  }

  getDateBr(isoDate: string) {
    return new Date(isoDate).toLocaleDateString('pt-br')
  }


}
