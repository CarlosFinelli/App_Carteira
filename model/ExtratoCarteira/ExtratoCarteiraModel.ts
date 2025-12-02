export interface ExtratoCarteiraModel {
    id: number,
    valorDinheiro: number,
    valorMilhas: number,
    dataTransacao: Date,
    fk_idCarteira: number,
}