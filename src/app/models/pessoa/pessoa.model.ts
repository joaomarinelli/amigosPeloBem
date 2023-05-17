import { Model } from './../model/model';

export interface Pessoa extends Model{
    nome: string;
    foto: string;
    dataNascimento: string;
    cpf: string;
    contato: string;
    cidadeOrigem: string;
    localOndeViveMaps: string;
    familiares: Pessoa[];
    tipoSanguineo: string;
    situacaoPessoa: string;
    ong: string;
    // ong: Ong;
}
