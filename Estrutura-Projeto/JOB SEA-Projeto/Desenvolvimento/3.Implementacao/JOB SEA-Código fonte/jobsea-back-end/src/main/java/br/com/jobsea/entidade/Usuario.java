package br.com.jobsea.entidade;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.lang.NonNull;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

@Entity
@Api(value = "Model Usuário")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column
	@NonNull
	@ApiModelProperty(value = "Nome do usuário", required = true)
	private String nome;

	@Column
	@NonNull
	private String email;

	@Column
	@NonNull
	private String senha;

	@Column
	private String softSkills;

	@Column
	private String techSkills;

	@Column
	private String bioDescricao;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "usuario_id")
	private List<Projeto> projetos;

	@Column
	@ApiModelProperty(value = "Endereço URL da imagem")
	private String imgUrl;

	@Column
	@ApiModelProperty(value = "Nome da imagem")
	private String imgNome;

	@OneToOne(mappedBy = "usuario")
	private TokenAuthUser tokenAuthUser;

	@Column
	private Boolean ativo = true;

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getImgNome() {
		return imgNome;
	}

	public void setImgNome(String imgNome) {
		this.imgNome = imgNome;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getSoftSkills() {
		return softSkills;
	}

	public void setSoftSkills(String softSkills) {
		this.softSkills = softSkills;
	}

	public String getTechSkills() {
		return techSkills;
	}

	public void setTechSkills(String techSkills) {
		this.techSkills = techSkills;
	}

	public String getBioDescricao() {
		return bioDescricao;
	}

	public void setBioDescricao(String bioDescricao) {
		this.bioDescricao = bioDescricao;
	}

	public List<Projeto> getProjetos() {
		return projetos;
	}

	public void setProjetos(List<Projeto> projetos) {
		this.projetos = projetos;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public TokenAuthUser getTokenAuthUser() {
		return tokenAuthUser;
	}

	public void setTokenAuthUser(TokenAuthUser tokenAuthUser) {
		this.tokenAuthUser = tokenAuthUser;
	}

}
