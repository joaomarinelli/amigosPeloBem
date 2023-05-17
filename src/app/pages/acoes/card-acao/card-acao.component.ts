import { Component, Input, OnInit } from '@angular/core';
import { Acao } from 'src/app/models/acao/acao.model';


@Component({
  selector: 'app-card-acao',
  templateUrl: './card-acao.component.html',
  styleUrls: ['./card-acao.component.scss']
})
export class CardAcaoComponent implements OnInit {

  @Input() acao : Acao;

  constructor() { }

  ngOnInit() {
  }

  getDateBr(isoDate: string){
    return new Date(isoDate).toLocaleDateString('pt-br')
  }

}
