package br.com.jobsea.util;

import br.com.jobsea.entidade.Projeto;

public class ProjetoRequestUtil {

	public static Projeto returnModelForRequestContentType(String contentType, Projeto projetoModelAttribute,
			Projeto projetoJson) {

		if (EnumContentType.MULTIPART_FORMDATA.getValue().equals(contentType)) {
			return projetoModelAttribute;
		}

		if (EnumContentType.JSON.getValue().equals(contentType)) {
			return projetoJson;
		}

		return new Projeto();
	}

}
