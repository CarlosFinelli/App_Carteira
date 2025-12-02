// src/views/Login/LoginView.tsx (ajustado)
import { Card } from "@/components/Common/Card";
import { CustomButton } from "@/components/Common/CustomButton";
import UserController from "@/controller/user/UserController";
import { TextInputStyles } from "@/styles/TextInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginView() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Card>
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
          Login
        </Text>

        <TextInput
          style={[TextInputStyles.textInput, { marginTop: 16, width: "100%" }]}
          placeholder="Digite o seu email aqui"
          inputMode="email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[TextInputStyles.textInput, { marginTop: 12, width: "100%" }]}
          placeholder="Digite a sua senha aqui"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <CustomButton
          title="Login"
          onPress={() => UserController.login(email, senha, router)}
          style={{ marginTop: 20, width: "100%" }}
        />

        <CustomButton
          title="Cadastrar-se"
          onPress={() => router.push("/register")}
          style={{ marginTop: 12, width: "100%" }}
        />
      </Card>
    </SafeAreaView>
  );
}
