package br.com.jobsea.usuario;

import java.util.List;

import br.com.jobsea.entidade.Usuario;

public interface UsuarioService {

	Usuario cadastrarUsuario(Usuario model);

	Usuario atualizarUsuario(Usuario model);

	Usuario buscarUsuario(Long id);

	List<Usuario> buscarUsuariosAtivos();

	void desativarUsuario(Long id);

}
