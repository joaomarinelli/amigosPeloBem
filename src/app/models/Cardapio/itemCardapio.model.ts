export interface itemCardapio{
    id: string;
    created: string;
    updated: string;
    nome: string;
    quantidade: number;
    unidadeDeMedida: number;
    valor: number;
    nomeEstabelecimentoAdquirido?: string;
}