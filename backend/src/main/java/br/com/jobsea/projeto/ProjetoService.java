package br.com.jobsea.projeto;

import java.util.List;

import br.com.jobsea.entidade.Projeto;

public interface ProjetoService {

	Projeto cadastrarProjeto(Projeto model);

	Projeto atualizarProjeto(Projeto model);

	Projeto buscarProjeto(Long id);

	List<Projeto> buscarProjetosAtivos();

	void desativarProjeto(Long id);

}
