import { Model } from './../model/model';

export interface Instituicao extends Model{
  nome: string;
  cnpj: string;
  descricao: string;


  // ong: Ong;
}
