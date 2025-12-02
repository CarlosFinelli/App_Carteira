
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    iss?: string;
    sub?: string;
    aud?: string | string[];
    exp?: number;
    iat?: number;

    id: number;
    email: string;
    role: string;
}

export function decodeJwtToken(token: string) : JwtPayload | null {
    try {
        const decodedPayload = jwtDecode<JwtPayload>(token);
        return decodedPayload;
    } catch(error) {
        console.error("Erro ao decodificar o token JWT: ", error);
        return null;
    }
}