import PacotesModel from "@/model/Pacotes/PacotesModel";
import api from "@/services/api";

class PacotesController {
    async getPacotes() {

        try {
            const response = await api.get(`/pacotes`);
            console.log(`Response: ${JSON.stringify(response.data)}`)

            if(!response || !response.data[0].id) {
                console.error("Erro ao recuperar pacotes")
                return null;
            }

            const pacotes: PacotesModel[] = response.data;
            return pacotes; 
        } catch(error) {
            console.error("Erro ao recuperar pacotes: ", JSON.stringify(error))
            return null;
        }
    }
};

export default new PacotesController()