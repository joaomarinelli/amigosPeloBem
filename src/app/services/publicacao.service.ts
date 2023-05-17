import { Publicacao } from '../models/publicacao/publicacao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;
const RECURSO = API+'/publicacao'

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  constructor(
    private httpClient: HttpClient
  ) { }


  selectAll(){
    return this.httpClient.get<Publicacao[]>(RECURSO);
  }

  selectById(id: string){
    return this.httpClient.get<Publicacao>(RECURSO+'/'+id);
  }

  insert(modelo: Publicacao){
    return this.httpClient.post<Publicacao>(RECURSO, modelo)
  }

  update(modelo: Publicacao){
    return this.httpClient.put<Publicacao>(RECURSO+'/'+modelo.id, modelo)
  }

  delete(id: string){
    return this.httpClient.delete<Publicacao>(RECURSO+'/'+id);
  }

  isertOrUpdate(modelo: Publicacao){
    if(modelo && modelo.id){
      return this.update(modelo);
    }else{
      return this.insert(modelo);
    }

  }

}
