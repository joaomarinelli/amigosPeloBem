import { Pessoa } from '../models/pessoa/pessoa.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;
const RECURSO = API+'/pessoa'

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient
  ) { }


  selectAll(){
    return this.httpClient.get<Pessoa[]>(RECURSO);
  }

  selectById(id: string){
    return this.httpClient.get<Pessoa>(RECURSO+'/'+id);
  }

  insert(modelo: Pessoa){
    return this.httpClient.post<Pessoa>(RECURSO, modelo)
  }

  update(modelo: Pessoa){
    return this.httpClient.put<Pessoa>(RECURSO+'/'+modelo.id, modelo)
  }

  delete(id: string){
    return this.httpClient.delete<Pessoa>(RECURSO+'/'+id);
  }

  isertOrUpdate(modelo: Pessoa){
    if(modelo && modelo.id){
      return this.update(modelo);
    }else{
      return this.insert(modelo);
    }

  }



}
