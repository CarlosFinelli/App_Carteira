import { CarteiraModel } from "@/model/Carteira/CarteiraModel";
import { ExtratoCarteiraModel } from "@/model/ExtratoCarteira/ExtratoCarteiraModel";
import api from "@/services/api";
import { getToken } from "@/services/authStorage";
import { decodeJwtToken } from "@/util/Jwt";

class CarteiraController {
    async getCarteira() {
        const token = await getToken();
        const userInfo = decodeJwtToken(token!);

        const response = await api.get(`/carteira/user/${userInfo?.id}`);

        if(!response || !response.data.id) {
            console.error("Erro ao recuperar carteira do usuário")
            return null;
        }

        const carteira: CarteiraModel = response.data;
        return carteira;
    }

    async getExtratoCarteira(id: number) {
        try {
            console.log(`id da carteira: ${id}`);
            const response = await api.get(`/extratos/carteira/${id}`);

            if(!response || !response.data[0].id) {
                console.error("Erro ao recuperar extrato do usuário")
                return null;
            }

            const extrato: ExtratoCarteiraModel[] = response.data;
            return extrato;
        } catch(error) {
            console.log(JSON.stringify(error))
            console.error(`Erro ao recuperar extrato do usuário: ${error.message}`)
            return null;
        }
    }

    async makeDeposit(value: number) {
        try {
            const carteira = await this.getCarteira();
            if(!carteira || !carteira.saldoDinheiro) {
                console.error(`Erro ao recuperar dados do saldo na carteira!`)
            }

            const saldoCarteira = carteira?.saldoDinheiro!.toString();
            console.log(value)

            const novoValor = parseFloat(saldoCarteira!) + parseFloat(value.toString());
            console.log(`Valor: ${carteira?.saldoDinheiro}, Novo Valor: ${novoValor}`);
            const result = await api.put(`/carteira/${carteira?.id}`, {
                valorMoeda: novoValor,
                valorMilhas: carteira?.saldoMilhas
            })

            return result.data.message;

        } catch(error) {
            console.error(`Erro ao realizar depósito na carteira: ${error.message}`)
            return `Erro ao realizar depósito na carteira`;
        }
        
    }
};

export default new CarteiraController()