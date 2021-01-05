package br.com.jobsea.projeto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.jobsea.entidade.Projeto;
import br.com.jobsea.util.ProjetoRequestUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping({ "/api/projeto", "/api/projeto/" })
@Api(value = "Controller - Projeto")
public class ProjetoController {

	@Autowired
	private ProjetoService projetoService;

	@ApiOperation(value = "Retornar um projeto.")
	@ApiResponses({ @ApiResponse(code = 200, message = "Retorna projeto requerido.") })
	@GetMapping(value = { "/{id}" }, produces = "application/json")
	public Projeto getUser(@PathVariable("id") Long id) {
		return projetoService.buscarProjeto(id);
	}

	@ApiOperation(value = "Registra um projeto.")
	@PostMapping(value = "", produces = "application/json")
	public Projeto saveProjeto(@ModelAttribute Projeto modelAttribute, 
			@RequestBody Projeto modelJson,
			@RequestHeader("Content-Type") String contentType) {

		Projeto projeto = ProjetoRequestUtil.returnModelForRequestContentType(
				contentType.split(";")[0], modelAttribute, modelJson);
		
		return projetoService.cadastrarProjeto(projeto);
	}

	@ApiOperation(value = "Atualiza um projeto.")
	@PutMapping(value = { "/{id}" }, produces = "application/json")
	public Projeto updateUser(@ModelAttribute Projeto modelAttribute, 
			@RequestBody Projeto modelJson,
			@RequestHeader("Content-Type") String contentType) {

		Projeto projeto = ProjetoRequestUtil.returnModelForRequestContentType(
				contentType.split(";")[0], modelAttribute, modelJson);
		
		return projetoService.atualizarProjeto(projeto);
	}

	@ApiOperation(value = "Deleta/Desativa um projeto ativo.")
	@DeleteMapping(value = { "/{id}" })
	public void deleteUser(@PathVariable("id") Long id) {
		projetoService.desativarProjeto(id);
	}

	@ApiOperation(value = "Retorna uma lista de projetos.")
	@GetMapping(value = { "/all" }, produces = "application/json")
	public List<Projeto> getAllUsersActive() {
		return projetoService.buscarProjetosAtivos();
	}

}
