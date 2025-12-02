import PacotesController from "@/controller/pacotes/PacotesController";
import PacotesModel from "@/model/Pacotes/PacotesModel";
import { dateToDMY } from "@/util/DateUtil";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

// export const options = {
//     title: "Carteira",
//     drawerLabel: "Carteira de Saldo"
// }

export default function PacotesView() {
    const [pacotes, setPacotes] = useState<PacotesModel[] | null>(null)

    const handleGetPacotes = async () => {
        const result = await PacotesController.getPacotes();
        setPacotes(result);
    }

    useEffect(() => {
        handleGetPacotes();
    }, [])

    return (
        <View style={{ padding: 16, flex: 1 }}>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Pacotes disponíveis</Text>

            <View style={{ flex: 1, marginTop: 24 }}> 
                {pacotes && pacotes.length > 0 ? (
                    <FlatList 
                        data={pacotes}
                        keyExtractor={(item) => item.id!.toString()}
                        renderItem={({item}) => (
                            <View style={{ 
                                padding: 12, 
                                backgroundColor: 'white', 
                                borderRadius: 12, 
                                elevation: 4, 
                                borderWidth: 1, 
                                marginBottom: 10
                            }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{item.titulo}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18 }}>Destino: {item.destino}</Text>
                                    <Text style={{ fontSize: 18 }}>Data Ida: {dateToDMY(item.dataIda!.toString())}</Text>
                                    <Text style={{ fontSize: 18 }}>Data Volta: {dateToDMY(item.dataVolta!.toString())}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18 }}>Hotel: {item.hotel}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18 }}>Translado: {item.translado}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18 }}>Preco em Moedas: R$ {item.precoBaseMoeda}</Text>
                                    <Text style={{ fontSize: 18 }}>Preco em Milhas: {item.precoBaseMilhas}</Text>
                                </View>
                            </View>
                        )}
                    />
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>
                            Não foi possível recuperar as informações de pacotes!
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}