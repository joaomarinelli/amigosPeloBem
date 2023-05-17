
import { Cardapio } from "../Cardapio/cardapio.model";
export interface Acao{
    id: string;
    created: string;
    updated: string;
    nome: string;
    descricao?: string;
    dataEHora: string;
    cardapio?: Cardapio;
    ///participantes: Pessoa[];
    //beneficiario: Instituicao;
    participantes?: any;
    beneficiarios: any;
    local: string;
}