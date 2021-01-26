import axios from "axios";

//BASE URL DA APLICACAO
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default api;