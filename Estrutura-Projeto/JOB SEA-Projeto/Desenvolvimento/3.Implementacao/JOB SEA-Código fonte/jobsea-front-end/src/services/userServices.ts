import api from "./api";


//ROTAS DE USUARIO
//cria usuario
export const createUser = (data:object) => {
    return api.post("/api/usuario/", data);
}
//atualiza usuario
export const updateUser = (id: number, newData: object) => {
    return api.put(`/api/usuario/${id}`, newData);
}
//busca somente 1 usuario
export const getUser = (id: number) => {
    return api.get(`/api/usuario/${id}`);
}
//deleta usuario
export const deleteUser = (id: number) => {
    return api.post(`/api/usuario/${id}`);
}
//busca todos os usuarios
export const getAll = () => {
    return api.get("/api/usuario/all", {
        headers: {
            "Access-Control-Allow-Origins": true,
        }
    });
}