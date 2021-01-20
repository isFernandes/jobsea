import api from "./api";

//ROTAS DE PROJETOS
//cria projeto
export const createProject = (newProject: object) => {
    return api.post("/api/projeto/", newProject);
}
//atualiza projetos
export const updateProject = (id: number, newData: object) => {
    return api.put(`/api/projeto/${id}`, { newData });
}
//busca 1 projeto
export const getProject = (id: number) => {
    return api.get(`/api/projeto/${id}`);
}
//deleta projeto
export const deleteProject = (id: number) => {
    return api.delete(`/api/projeto/${id}`);
}
//busca todos os projetos
export const getAllProject = () => {
    return api.get("/api/projeto/all");
}