import { Usuario } from './../models/usuario/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;
const RECURSO = API+'/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient
  ) { }


  selectAll(){
    return this.httpClient.get<Usuario[]>(RECURSO);
  }

  selectById(id: string){
    return this.httpClient.get<Usuario>(RECURSO+'/'+id);
  }

  insert(usuario: Usuario){
    return this.httpClient.post<Usuario>(RECURSO, usuario)
  }

  update(usuario: Usuario){
    return this.httpClient.put<Usuario>(RECURSO+'/'+usuario.id, usuario)
  }

  delete(id: string){
    return this.httpClient.delete<Usuario>(RECURSO+'/'+id);
  }

  isertOrUpdate(usuario: Usuario){
    if(usuario && usuario.id){
      return this.update(usuario);
    }else{
      return this.insert(usuario);
    }

  }
}
