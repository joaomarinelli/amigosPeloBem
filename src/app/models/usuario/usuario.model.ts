
import { TipoSanguineo } from './tipoSanguineo';
export interface Usuario{

  id: number;
  ativo: boolean;
  created: string;
  updated: string;
  nome: string;
  dataDeNascimento: string;
  cpf: string;
  contato: string;
  cidadeOndeMora: string;
  tipoSanguineo: TipoSanguineo;
  //ong: Ong;



  name: string;
  avatar: string;
}
