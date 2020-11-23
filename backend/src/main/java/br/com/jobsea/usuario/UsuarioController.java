package br.com.jobsea.usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.jobsea.entidade.Usuario;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping({ "/api/usuario", "/api/usuario/" })
@Api(value = "Controller - Usuário")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioServ;

	@ApiOperation(value = "Retornar um usuário.")
	@ApiResponses({ @ApiResponse(code = 200, message = "Retorna usuario requerido.") })
	@GetMapping(value = { "/{id}" }, produces = "application/json")
	public Usuario getUser(@PathVariable("id") Long id) {
		return usuarioServ.buscarUsuario(id);
	}

	@ApiOperation(value = "Registra um usuário.")
	@PostMapping(value = "/", produces = "application/json", consumes = "application/json")
	public Usuario saveUser(@ModelAttribute Usuario model) {
		return usuarioServ.cadastrarUsuario(model);
	}

	@ApiOperation(value = "Atualiza um usuário.")
	@PutMapping(value = { "/{id}" }, produces = "application/json", consumes = "application/json")
	public Usuario updateUser(@ModelAttribute Usuario model) {
		return usuarioServ.atualizarUsuario(model);
	}

	@ApiOperation(value = "Deleta/Desativa um usuário ativo.")
	@DeleteMapping(value = { "/{id}" })
	public void deleteUser(@PathVariable("id") Long id) {
		usuarioServ.desativarUsuario(id);
	}

	@ApiOperation(value = "Retorna uma lista de usuários.")
	@GetMapping(value = { "/all" }, produces = "application/json")
	public List<Usuario> getAllUsersActive() {
		return usuarioServ.buscarUsuariosAtivos();
	}

}
