import { UserModel } from "@/model/User/UserModel";
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

    async getUser(id: number) {
        try {
            const response = await api.get(`/users/${id}`)

            if (!response || !response.data.id) {
            alert("Erro ao recuperar informaçÕes do usuário!")
                return null;
            }
            
            const user: UserModel = response.data;
            return user;
        } catch(error) {
            alert("Erro ao recuperar informaçÕes do usuário!")
            console.log(`Erro ao recuperar informações do usuário: ${JSON.stringify(error)}`)
            return null;
        }
    }
}

export default new LoginController();