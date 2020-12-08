package br.com.jobsea.projeto;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jobsea.entidade.Projeto;

@Service
public class ProjetoServiceImpl implements ProjetoService {

	@Autowired
	private ProjetoRepository projetoRepo;

	@Override
	public Projeto cadastrarProjeto(Projeto model) {
		if (model.getId() != null) {
			return atualizarProjeto(model);
		} else {
			return projetoRepo.save(model);
		}
	}

	@Override
	public Projeto atualizarProjeto(Projeto model) {
		Optional<Projeto> projetoOp = projetoRepo.findById(model.getId());

		if (!projetoOp.isPresent()) {
			return null;
		}

		Projeto projeto = projetoOp.get();

		projeto.setId(model.getId());
		projeto.setNome(model.getNome());
		projeto.setDescricao(model.getDescricao());
		projeto.setTagTecnicas(model.getTagTecnicas());
		projeto.setTempoEstimado(model.getTempoEstimado());
		projeto.setVerba(model.getVerba());
		projeto.setAtivo(model.getAtivo());

		return projetoRepo.save(projeto);
	}

	@Override
	public Projeto buscarProjeto(Long id) {
		Optional<Projeto> projeto = projetoRepo.findById(id);
		return projeto.isPresent() ? projeto.get() : null;
	}

	@Override
	public List<Projeto> buscarProjetosAtivos() {
		return projetoRepo.findByAtivoTrue();
	}

	@Override
	public void desativarProjeto(Long id) {
		Projeto projeto = buscarProjeto(id);
		projeto.setAtivo(false);
		atualizarProjeto(projeto);
	}

}
