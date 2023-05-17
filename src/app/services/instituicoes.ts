import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Instituicao } from '../models/Instituicao/instituicao.model';


const API = environment.ApiUrl;
const RECURSO = API+'/instituicao'

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  constructor(
    private httpClient: HttpClient
  ) { }

selectAll(){
  return this.httpClient.get<Instituicao[]>(RECURSO);
}

selectById(id: string){
  return this.httpClient.get<Instituicao>(RECURSO+'/'+id);
}

insert(instituicao: Instituicao){
  return this.httpClient.post<Instituicao>(RECURSO, instituicao)
}

update(instituicao: Instituicao){
  return this.httpClient.put<Instituicao>(RECURSO+'/'+instituicao.id, instituicao)
}

delete(id: string){
  return this.httpClient.delete<Instituicao>(RECURSO+'/'+id);
}
}
