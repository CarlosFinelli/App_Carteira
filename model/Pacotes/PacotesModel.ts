export default interface PacotesModel {
    id?: number, 
    titulo?: string, 
    destino?: string, 
    dataIda?: Date, 
    dataVolta?: Date, 
    hotel?: string, 
	translado?: string, 
    descricao?: string, 
    precoBaseMoeda?: number, 
    precoBaseMilhas?: number
}