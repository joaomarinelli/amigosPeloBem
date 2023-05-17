import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.component.html',
  styleUrls: ['./doar.component.scss']
})
export class DoarComponent implements OnInit {

  textoBotaoCopiar = 'Copiar';

  constructor() { }

  ngOnInit() {}

  copiarChavePix(){
    navigator.clipboard.writeText(document.getElementById('chave-pix').innerHTML);

    this.textoBotaoCopiar = 'Copiado!!!';

    setTimeout(() => {
      this.textoBotaoCopiar = 'Copiar';
    }, 3000);
  }

  abrirInstagram(){
    window.open("https://www.instagram.com/amigospelobem_/");
  }

  abrirEmail(){
    window.open("mailto:admin@amigospelobem.com.br?subject=Doação&body=Quero fazer uma doação!");
  }

}
