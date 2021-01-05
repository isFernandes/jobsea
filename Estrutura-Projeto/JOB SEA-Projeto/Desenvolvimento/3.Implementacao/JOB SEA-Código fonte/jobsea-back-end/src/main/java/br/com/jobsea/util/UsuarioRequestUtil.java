package br.com.jobsea.util;

import br.com.jobsea.entidade.Usuario;

public class UsuarioRequestUtil {

	public static Usuario returnModelForRequestContentType(String contentType, Usuario usuarioModelAttribute,
			Usuario usuarioJson) {

		if (EnumContentType.MULTIPART_FORMDATA.getValue().equals(contentType)) {
			return usuarioModelAttribute;
		}

		if (EnumContentType.JSON.getValue().equals(contentType)) {
			return usuarioJson;
		}

		return new Usuario();
	}

}
