package br.com.jobsea.projeto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jobsea.entidade.Projeto;

@Repository
public interface ProjetoRepository extends JpaRepository<Projeto, Long> {

	List<Projeto> findByAtivoTrue();
	
}
