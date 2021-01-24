package br.com.jobsea.usuario;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jobsea.entidade.Projeto;
import br.com.jobsea.entidade.Usuario;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepo;

	@Override
	public Usuario cadastrarUsuario(Usuario model) {
		if (model.getId() != null) {
			return atualizarUsuario(model);
		} else if (null == usuarioRepo.findByEmailEquals(model.getEmail())) {
			return usuarioRepo.save(model);
		}
		return usuarioRepo.save(model);
	}

	@Override
	public Usuario atualizarUsuario(Usuario model) {
		Optional<Usuario> usuarioOp = usuarioRepo.findById(model.getId());

		if (!usuarioOp.isPresent() && null != usuarioRepo.findByEmailEquals(model.getEmail())) {
			return null;
		}

		Usuario usuario = usuarioOp.get();

		usuario.setId(model.getId());
		usuario.setNome(model.getNome());
		usuario.setEmail(model.getEmail());
		usuario.setSenha(model.getSenha());
		usuario.setBioDescricao(model.getBioDescricao());
		usuario.setSoftSkills(model.getSoftSkills());
		usuario.setTechSkills(model.getTechSkills());
		usuario.setProjetos(new ArrayList<Projeto>());
		usuario.setProjetos(model.getProjetos());
		usuario.setAtivo(model.getAtivo());
		usuario.setImgNome(model.getImgNome());
		usuario.setImgUrl(model.getImgUrl());

		return usuarioRepo.save(usuario);
	}

	@Override
	public Usuario buscarUsuario(Long id) {
		Optional<Usuario> usuario = usuarioRepo.findById(id);
		return usuario.isPresent() ? usuario.get() : null;
	}

	@Override
	public List<Usuario> buscarUsuariosAtivos() {
		return usuarioRepo.findByAtivoTrue();
	}

	@Override
	public void desativarUsuario(Long id) {
		Usuario usuario = buscarUsuario(id);
		usuario.setAtivo(false);
		atualizarUsuario(usuario);
	}

}
