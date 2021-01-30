import api from "./api";
import authHeader from "./authHeaders"

//ROTAS DE USUARIO

//busca todos os usuarios ativos
export const getAll = () => {
    return api.get("/api/usuario/all");
}

//busca somente 1 usuario
//id do usuario selecionado 
export const getUser = (id: string) => {
    return api.get(`/api/usuario/${id}`, {headers: authHeader()});
}

//atualiza usuario
export const updateUser = (id: string, newData: any) => {
    return api.put(`/api/usuario/${id}`, { nome: newData.nome, imgUrl:newData.imgUrlBase,  bioDescricao: newData.bioDescricao, email: newData.email, softSkills: newData.softSkills, techsSkills: newData.techsSkills }, {headers: authHeader()});
}

//inscreve usuario
export const subProject = (id: string, projectId: string) => {
    console.log(id)
    console.log(projectId)
    return api.put(`/api/usuario/projeto/${id}`, { projectId:projectId }, {headers: authHeader()});
}

//deleta usuario
export const deleteUser = (id: string) => {
    return api.delete(`/api/usuario/${id}`,{headers: authHeader()});
}

//reativa usuario deletado
export const reativarUser = (id: string) => {
    return api.put(`/api/usuario/reativar/${id}`,{headers: authHeader()});
}
