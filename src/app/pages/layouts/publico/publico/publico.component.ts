import { HttpErrorResponse } from '@angular/common/http';
import { Publicacao } from './../../../../models/publicacao/publicacao.model';
import { PublicacaoService } from 'src/app/services/publicacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.scss']
})
export class PublicoComponent implements OnInit {

  fotosFundo: string[] = [];

  constructor(
    private publicacaoService: PublicacaoService,
  ) { }

  ngOnInit() {
    this.buscaFotosParaFundo();
  }

  buscaFotosParaFundo() {

    this.fotosFundo[0] = "assets/acoes/cachorro-quente-APB-09102022.jpg";
    this.fotosFundo[1] = "assets/acoes/cachorro-quente-APB-18072021.jpg";
    this.fotosFundo[2] = "assets/acoes/entrega-APB-13112022.jpg";
    this.fotosFundo[3] = "assets/acoes/galinhada-APB-24052022.jpg";
    this.fotosFundo[4] = "assets/acoes/massa-com-carne-moida-APB-13112022.jpg";

    // this.publicacaoService.selectAll().subscribe(
    //   modelos=>this.coloca5FotosAleatoriasNaFotosFundo(modelos),
    //   (err:HttpErrorResponse)=>console.error(err.message)
    // )
  }

  coloca5FotosAleatoriasNaFotosFundo(modelos: Publicacao[]) {
    let maximoDeFotosASeremSorteadas = 5;

    for (let i = 0; i < maximoDeFotosASeremSorteadas; i++) {
      let numeroSorteado = this.sortearNumero(maximoDeFotosASeremSorteadas);

      if(modelos[numeroSorteado] && modelos[numeroSorteado].foto) this.fotosFundo.push(modelos[numeroSorteado].foto);
      else if(modelos[0] && modelos[0].foto) this.fotosFundo.push(modelos[0].foto);
      else this.fotosFundo.push("https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2016/10/solidariedade.jpg");
    }
  }

  sortearNumero(numeroMaximo: number): number {
    return Math.floor(Math.random() * numeroMaximo + 1);
  }

}
