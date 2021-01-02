package br.com.jobsea.util;

import java.util.LinkedHashMap;
import java.util.List;

import br.com.jobsea.entidade.Usuario;

public class UsuarioRequestUtil {

	public static Usuario returnModelForRequestContentType(String contentType, Usuario usuarioModelAttribute) {

		if (EnumContentType.MULTIPART_FORMDATA.getValue().equals(contentType)) {
			return usuarioModelAttribute;
		}

		return new Usuario();
	}

	public static Usuario returnModelForRequestContentType(String contentType,
			List<LinkedHashMap<String, String>> body) {

		if (EnumContentType.JSON.getValue().equals(contentType)) {
			Usuario usuario = new Usuario();

			List<LinkedHashMap<String, String>> attributes = body;

			for (LinkedHashMap<String, String> attr : attributes) {

			}

			return usuario;
		}

		return new Usuario();

	}

}
