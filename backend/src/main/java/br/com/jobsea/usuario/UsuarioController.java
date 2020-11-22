package br.com.jobsea.usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.jobsea.entidade.Usuario;

@RestController
@RequestMapping({ "/api/usuario", "/api/usuario/" })
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioServ;

	@GetMapping({ "/{id}", "/{id}/" })
	@ResponseStatus(code = HttpStatus.OK)
	public Usuario getUser(@PathVariable("id") Long id) {
		return usuarioServ.buscarUsuario(id);
	}

	@PostMapping()
	public Usuario saveUser(@ModelAttribute Usuario model) {
		return usuarioServ.cadastrarUsuario(model);
	}

	@PutMapping({ "/{id}", "/{id}/" })
	public Usuario updateUser(@ModelAttribute Usuario model) {
		return usuarioServ.atualizarUsuario(model);
	}

	@DeleteMapping({ "/{id}", "/{id}/" })
	@ResponseStatus(code = HttpStatus.OK)
	public void deleteUser(@PathVariable("id") Long id) {
		usuarioServ.desativarUsuario(id);
	}

	@GetMapping({ "/all", "/all/" })
	public List<Usuario> getAllUsersActive() {
		return usuarioServ.buscarUsuariosAtivos();
	}

}
