package br.com.jobsea.login;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jobsea.entidade.TokenAuthUser;
import br.com.jobsea.entidade.Usuario;
import br.com.jobsea.usuario.UsuarioRepository;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private TokenAuthUserRepository tokenRepo;

	@Autowired
	private UsuarioRepository userRepo;
	
	@Override
	public TokenAuthUser getTokenAuth(Usuario usuario) {

		UUID uuid = UUID.randomUUID();

		Usuario userBanco = userRepo.findByEmailEquals(usuario.getEmail());

		if (null != userBanco && userBanco.getSenha().equals(usuario.getSenha())) {

			TokenAuthUser token = new TokenAuthUser();

			token.setUsuario(usuario);
			token.setToken(uuid.toString());

			return tokenRepo.save(token);
		}

		return null;
	}

	@Override
	public Boolean verifedUserAuth(String token) {
		return (null != tokenRepo.findByToken(token) ? true : false);
	}

}
