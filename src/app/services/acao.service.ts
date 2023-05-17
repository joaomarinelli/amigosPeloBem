import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Acao } from '../models/acao/acao.model';

const API = environment.ApiUrlJoao;
const RECURSO = API+'/acao'

@Injectable({
  providedIn: 'root'
})


export class AcaoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  selectAll(){
    return this.httpClient.get<Acao[]>(RECURSO)
  }

  selectById(id: string){
    return this.httpClient.get<Acao>(RECURSO+'/'+id)
  }

  insert(acao: Acao){
    return this.httpClient.post<Acao>(RECURSO, acao)
  }

  update(acao: Acao){
    return this.httpClient.put<Acao>(RECURSO+'/'+acao.id, acao)
  }

  delete(id: string){
    return this.httpClient.delete<Acao>(RECURSO+'/'+id);
  }
}

