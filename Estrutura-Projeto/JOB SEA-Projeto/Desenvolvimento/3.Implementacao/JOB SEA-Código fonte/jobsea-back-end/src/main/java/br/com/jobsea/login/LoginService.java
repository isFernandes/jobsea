package br.com.jobsea.login;

import br.com.jobsea.entidade.TokenAuthUser;
import br.com.jobsea.entidade.Usuario;

public interface LoginService {

	TokenAuthUser getTokenAuth(Usuario usuario);
	
	Boolean verifedUserAuth(String token);

}
