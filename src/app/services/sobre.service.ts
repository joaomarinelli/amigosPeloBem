import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sobre } from '../models/sobre/sobre.model';
import { Usuario } from '../models/usuario/usuario.model';

const API = environment.urlSobre;
const RECURSO = API+'/sobre'

@Injectable({
  providedIn: 'root'
})

export class SobreService {

  constructor( private http: HttpClient ) {  }

  getSobre(id: number): Observable<Sobre> {
    return this.http.get<Sobre>(`${RECURSO}/${id}`);
  }

  atualizaSobre(sobre: Sobre): Observable<Sobre> {
    const url = `${environment.urlSobre}/sobre/${sobre.id}`;
    return this.http.put<Sobre>(url, sobre);
  }





  /*
  getUsuario(): Observable<Usuario[]>{
    const url = `${environment.urlSobre}/usuario`;
    return this.http.get<Usuario[]>(url);
  }
  readById(id: number): Observable<Usuario> {
    const url = `${environment.urlSobre}/usuario/${id}`;
    return this.http.get<Usuario>(url)
  }
  upadate(product: Usuario): Observable<Usuario>{
    const url = `${environment.urlSobre}/usuario/${product.id}`;
    return this.http.put<Usuario>(url, product)
    ;
  }
  getUsuario(): Observable<Usuario[]>{
    const url = `${environment.urlSobre}/usuario`;
    return this.http.get<Usuario[]>(url);
  }




  obterSobre() : Observable<Sobre> {
    return this.http.get<Sobre>(`${environment.urlSobre}/sobre`);
   }

  getListaLembretes(): Observable<Sobre[]>{
    const url = `${environment.ApiUrlSobre}/sobre`;
    return this.http.get<Sobre[]>(url);
  }

  getLembretes(id: number): Observable<Sobre[]>{
    const url = `${environment.ApiUrlSobre}/sobre/${id}`;
    return this.http.get<Sobre[]>(url);
  }

  addLembretes(sobre: Sobre): Observable<Sobre>{
    const url = `${environment.ApiUrlSobre}/sobre/`;
    return this.http.post<Sobre>(url, sobre);
  }

  atualizaLembretes(sobre: Sobre): Observable<Sobre>{
    const url = `${environment.ApiUrlSobre}/sobre/${sobre.id}`;
    return this.http.put<Sobre>(url, sobre);
  }

  deletaLembretes(id: number): Observable<Sobre>{
    const url = `${environment.ApiUrlSobre}/sobre/${id}`;
    return this.http.delete<Sobre>(url);
  }
  */
}
