import api from "./api";
import authHeader from "./authHeaders";

//ROTAS DE PROJETOS

//busca projetos 
export const getAllProject = () => {
    return api.get(`/api/projeto/all/`);
}

//cria projeto
//id do usuario logado que cria o projeto
export const createProject = (ownerId: string, newProject: any) => {
    return api.post(`/api/projeto/${ownerId}`, { nome: newProject.nome, descricao: newProject.descricao, tempoEstimado: newProject.tempoEstimado, tagTecnicas: newProject.tagTecnicas, verba: newProject.verba }, { headers: authHeader() });
}

//busca projetos de um usuario
export const getProjectsFromUser = (id: string) => {
    return api.get(`/api/projeto/all/${id}`, { headers: authHeader() });
}

//busca 1 projeto
export const getProject = (id: string) => {
    return api.get(`/api/projeto/${id}`, { headers: authHeader() });
}

//atualiza projetos
export const updateProject = (id: string, newData: any) => {
    return api.put(`/api/projeto/${id}`, { nome: newData.nome, descricao: newData.descricao, tempoEstimado: newData.tempoEstimado, tagTecnicas: newData.tagTecnicas, verba: newData.verba }, { headers: authHeader() });
}

//reativa projeto
export const reativaProject = (id: string) => {
    return api.put(`/api/projeto/reativar/${id}`, { headers: authHeader() });
}

//deleta projeto
export const deleteProject = (id: string) => {
    return api.delete(`/api/projeto/${id}`, { headers: authHeader() });
}
