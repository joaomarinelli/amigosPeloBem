import { itemCardapio } from "./itemCardapio.model";
export interface Cardapio{
    id: string;
    created: string;
    updated: string;
    nome: string;
    descricao?: string;
    itenscardapio: itemCardapio[];
    valor?: number;

}