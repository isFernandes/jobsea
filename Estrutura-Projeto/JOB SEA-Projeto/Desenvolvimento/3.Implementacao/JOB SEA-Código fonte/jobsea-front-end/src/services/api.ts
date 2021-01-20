import axios from "axios";

//BASE URL DA APLICACAO
export const api = axios.create({
    baseURL: "http://200.98.204.176:8080",
});

//ROTAS DE USUARIO
export const createUser = (email: string, nome: string, senha: string) => {
    return api.post("/api/usuario/", {data:{email, nome, senha}});
}
export const updateUser = (id: number, newData: object) => {
    api.put(`/api/usuario/${id}`, newData);
}
export const getUser = (id: number) => {
    api.get(`/api/usuario/${id}`);
}
export const deleteUser = (id: number) => {
    api.post(`/api/usuario/${id}`);
}
export const getAll = () => {
    return api.get("/api/usuario/all", {
        headers: {
            "Access-Control-Allow-Origins": true,
        }
    });
}

//ROTAS DE PROJETOS
export const createProject = (newProject: object) => {
    api.post("/projeto/", newProject);
}

export const updateProject = (id: number, newData: object) => {
    api.put(`/projeto/${id}`, { newData });
}
export const getProject = (id: number) => {
    api.get(`/projeto/${id}`);
}
export const deleteProject = (id: number) => {
    api.post(`/projeto/${id}`);
}
export const getAllProject = () => {
    api.post("/projeto/all");
}