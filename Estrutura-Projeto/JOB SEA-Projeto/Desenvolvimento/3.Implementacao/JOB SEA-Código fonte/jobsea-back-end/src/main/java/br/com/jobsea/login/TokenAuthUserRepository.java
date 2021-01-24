package br.com.jobsea.login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jobsea.entidade.TokenAuthUser;

@Repository
public interface TokenAuthUserRepository extends JpaRepository<TokenAuthUser, Long> {

	TokenAuthUser findByToken(String token);
}
