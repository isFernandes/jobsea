package br.com.jobsea.projeto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;

@RestController
@RequestMapping({ "/api/projeto", "/api/projeto/" })
@Api(value = "Controller - Projeto")
public class ProjetoController {

	@Autowired
	private ProjetoService projetoService;
	
}
