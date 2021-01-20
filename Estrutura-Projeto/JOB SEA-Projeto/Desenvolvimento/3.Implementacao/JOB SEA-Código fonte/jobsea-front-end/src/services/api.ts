import axios from "axios";

//BASE URL DA APLICACAO
const api = axios.create({
    // baseURL: "http://200.98.204.176:3000",
    baseURL: "http://localhost:3333",
});

export default api;