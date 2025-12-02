import api from "@/services/api";

export async function MakeLogin(email: string, senha: string) {
    
    const result = await api.post(`/auth/login`,{
        email: email,
        senha: senha
    })

    if (!result) {
        alert("Email ou senha incorretor!");
    }

    console.log(JSON.stringify(result));

}