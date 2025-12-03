import { CustomButton } from "@/components/Common/CustomButton";
import CadastroModal from "@/components/Common/SaldoModal";
import CarteiraController from "@/controller/carteira/CarteiraController";
import { CarteiraModel } from "@/model/Carteira/CarteiraModel";
import { ExtratoCarteiraModel } from "@/model/ExtratoCarteira/ExtratoCarteiraModel";
import { UserModel } from "@/model/User/UserModel";
import { getToken } from "@/services/authStorage";
import { dateToDMY } from "@/util/DateUtil";
import { decodeJwtToken } from "@/util/Jwt";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

// export const options = {
//     title: "Carteira",
//     drawerLabel: "Carteira de Saldo"
// }

export default function CarteiraView() {
    const [user, setUser] = useState<UserModel | null>(null);
    const [carteira, setCarteira] = useState<CarteiraModel | null>(null);
    const [extrato, setExtrato] = useState<ExtratoCarteiraModel[] | null>(null)
    const [modalVisible, setModalVisible] = useState(false);

    const handleGetCarteira = async () => {
        const result = await CarteiraController.getCarteira();
        setCarteira(result);
    }

    const handleGetExtratoCarteira = async () => {
        const result = await CarteiraController.getExtratoCarteira(carteira?.id!);
        setExtrato(result);
    }

    const handleGetUser = async () => {
        const token = await getToken();
        if(token) {
            const payload = decodeJwtToken(token!);
            setUser(payload);
        } else {
            console.error("Token não encontrado!")
        }
    }

    const handleFormSubmit = async (dados: { valor: number }) => {
        setModalVisible(false);
        const result = await CarteiraController.makeDeposit(dados.valor);
        alert(result);
        handleGetCarteira();
    }

    useEffect(() => {
        handleGetCarteira();
    }, [])

    useEffect(() => {
        if(carteira?.id) {
            handleGetExtratoCarteira();
        }
    }, [carteira])

    useEffect(() => {
        handleGetUser();
    }, [])

    return (
        <View style={{ padding: 16, flex: 1 }}>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}>
                <View style={{ flex: 1 }}> 
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Saldo Dinheiro</Text>
                    <Text style={{fontSize: 16 }}>R$ {carteira?.saldoDinheiro! ? carteira?.saldoDinheiro.toString().replace('.', ',') : carteira?.saldoDinheiro}</Text>
                </View>
                
                <View> 
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Saldo Milhas</Text>
                    <Text style={{fontSize: 16}}>{carteira?.saldoMilhas! ? carteira.saldoMilhas.toString().replace('.', ',') : carteira?.saldoMilhas}</Text>
                </View>
            </View>

            <CustomButton 
                title="Depositar"
                onPress={() => setModalVisible(true)}
            />

            <View style={{ flex: 1 }}> 
                <Text style={{marginTop: 20, marginBottom: 24, fontSize: 24, fontWeight: "bold", textAlign: "center"}}>Histórico de transações</Text>
                {extrato && extrato.length > 0 ? (
                    <FlatList 
                        data={extrato}
                        keyExtractor={(item) => item.id.toString()}
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
                                    <Text>Valor Dinheiro: R$ {item.valorDinheiro! ? item.valorDinheiro.toString().replace('.', ',') : item.valorDinheiro}</Text>
                                </View>
                                <View>
                                    <Text>Valor Milhas: {item.valorMilhas! ? item.valorMilhas.toString().replace('.', ',') : item.valorMilhas}</Text>
                                </View>
                                <View>
                                    <Text>Data transação: {dateToDMY(item.dataTransacao.toString())}</Text>
                                </View>
                            </View>
                        )}
                    />
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>
                            O usuário não possui nenhum histórico de transação!
                        </Text>
                    </View>
                )}
                
                <CadastroModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSubmit={handleFormSubmit} />
            </View>
        </View>
    );
}