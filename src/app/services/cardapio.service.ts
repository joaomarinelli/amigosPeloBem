import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cardapio } from '../models/Cardapio/cardapio.model';
import { Usuario } from '../models/usuario/usuario.model';

const API = environment.ApiUrlJoao;
const RECURSO = API+'/cardapio'

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(
    private httpClient: HttpClient
  ) { }

selectAll(){
  return this.httpClient.get<Cardapio[]>(RECURSO);
}

selecxtById(id: string){
  return this.httpClient.get<Cardapio>(RECURSO+'/'+id);
}

insert(cardapio: Cardapio){
  return this.httpClient.post<Cardapio>(RECURSO, cardapio)
}

update(cardapio: Cardapio){
  return this.httpClient.put<Cardapio>(RECURSO+'/'+cardapio.id, cardapio)
}

delete(id: string){
  return this.httpClient.delete<Cardapio>(RECURSO+'/'+id);
}
}
