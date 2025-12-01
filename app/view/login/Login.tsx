import { Card } from "@/components/Common/Card";
import { CustomButton } from "@/components/Common/CustomButton";
import { TextInputStyles } from "@/styles/TextInput";
import { Button, Text, TextInput, View } from "react-native";

export default function Login() {
    return(
        <View>
            <Card>
                <Text style={{fontSize: 24, fontWeight: "bold"}}>Login</Text>
                <TextInput style={[TextInputStyles.textInput, {marginTop: 24}]} placeholder="Digite o seu email aqui" aria-label="Email" inputMode="email"></TextInput>
                <TextInput style={[TextInputStyles.textInput, {marginTop: 12}]} placeholder="Digite a sua senha aqui" aria-label="Senha" secureTextEntry={true}></TextInput>
                <CustomButton title={"Login"} onPress={() => alert('Login!')} style={{marginTop: 24, width: '100%'}} />
                <CustomButton title="Cadastrar-se" onPress={() => alert("Cadastrar!")} style={{marginTop: 12, width: '100%'}}></CustomButton>
            </Card>
        </View>
    )
}