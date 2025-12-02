import api from "@/services/api";
import { saveToken } from "@/services/authStorage";
import { Router } from "expo-router";

class LoginController {
    async login(email: string, senha: string, router: Router) {
        try {
            const response = await api.post("/auth/login", {
                email: email,
                senha: senha
            });

            const token = response.data.token;
            await saveToken(token);
            
            router.replace("/(drawer)/home");

            return response.data;
        } catch(err) {
            alert('Email ou senha errados')
            console.log(err);
            return { error: "Erro ao fazer login!" }
        }
    }

    async register(nome: string, email: string, senha: string, router: Router) {
        try {
            const response = await api.post("/auth/register", {
                nome: nome,
                email: email,
                senha: senha
            });

            console.log(JSON.stringify(response.data))
            if(response.data.id) {
                router.replace("/login");
                return response.data;
            }

            alert("Erro ao realizar cadastro!");
            return false;
        } catch(err) {
            alert('Email ou senha errados')
            console.log(err);
            return { error: "Erro ao fazer login!" }
        }
    }
}

export default new LoginController();