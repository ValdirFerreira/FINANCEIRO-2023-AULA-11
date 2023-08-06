export class SistemaFinanceiro {
    Id: number;
    Nome: string;
    Mes: number;
    Ano: number;
    DiaFechamento: number;
    GerarCopiaDespesa: boolean;
    MesCopia: number;
    AnoCopia: number;

    NomePropriedade:string="";
    mensagem:string="";
    notificacoes:[];
}