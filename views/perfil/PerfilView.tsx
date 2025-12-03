import { Card } from "@/components/Common/Card";
import CarteiraController from "@/controller/carteira/CarteiraController";
import UserController from "@/controller/user/UserController";
import { CarteiraModel } from "@/model/Carteira/CarteiraModel";
import { UserModel } from "@/model/User/UserModel";
import { getToken } from "@/services/authStorage";
import { decodeJwtToken } from "@/util/Jwt";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PerfilView() {
    const [user, setUser] = useState<UserModel | null>(null);
        const [carteira, setCarteira] = useState<CarteiraModel | null>(null);

    const handleGetUser = async () => {
        const token = await getToken();
        const userToken = decodeJwtToken(token!)
        const result = await UserController.getUser(userToken!.id);
        setUser(result);
    }

    const handleGetCarteira = async () => {
            const result = await CarteiraController.getCarteira();
            setCarteira(result);
        }

    useEffect(() => {
        handleGetUser();
    }, []);
    
    useEffect(() => {
        handleGetCarteira();
    }, [])

    return (
        <View style={{ padding: 16, }}>
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
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 32 }}>
                <Card>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Nome: {user?.nome}</Text>
                    <Text style={{fontSize: 20, fontWeight: "regular", marginTop: 12}}>Email: {user?.email}</Text>
                    <Text style={{fontSize: 20, fontWeight: "regular", marginTop: 12}}>Tipo: {user?.tipo}</Text>
                </Card>
            </View>
        </View>
    );
}