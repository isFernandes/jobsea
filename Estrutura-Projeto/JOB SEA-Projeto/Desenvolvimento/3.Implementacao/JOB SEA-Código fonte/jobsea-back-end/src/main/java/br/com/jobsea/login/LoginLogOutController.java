package br.com.jobsea.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import br.com.jobsea.entidade.TokenAuthUser;
import br.com.jobsea.entidade.Usuario;
import br.com.jobsea.util.UsuarioRequestUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(value = "Controller - Login/LogOut")
public class LoginLogOutController {

	@Autowired
	private LoginService loginService;

	@ApiOperation(value = "Retornar um Token Auth.")
	@PostMapping({ "/api/login", "/api/login/" })
	public TokenAuthUser getLogin(@ModelAttribute Usuario modelAttribute, 
			@RequestBody Usuario modelJson,
			@RequestHeader("Content-Type") String contentType) {

		Usuario usuario = UsuarioRequestUtil.returnModelForRequestContentType(
				contentType.split(";")[0], modelAttribute, modelJson);
		
		return loginService.getTokenAuth(usuario);
	}

}
