import axios from "axios";
import Constants from "expo-constants";
import { getToken } from "./authStorage";

const { BASE_ANDROID_URL } = Constants.expoConfig?.extra;

const api = axios.create({
  baseURL: BASE_ANDROID_URL,
});

api.interceptors.request.use(async (config) => {
    const token = await getToken();

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default api;
