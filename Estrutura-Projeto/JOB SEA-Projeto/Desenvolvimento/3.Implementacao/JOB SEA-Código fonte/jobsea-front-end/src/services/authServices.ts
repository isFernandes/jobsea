import api from "./api";

const register = (nome:string, email:string, password:any) => {
  return api.post("/api/usuario", {
    nome,
    email,
    password,
  });
};

const login = (email:string, password:any) => {
  return api.post("/api/usuario/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
