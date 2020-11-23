package br.com.jobsea.entidade;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Projeto {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column
	private String nome;

	@Column
	private String descricao;

	@Column
	private String tagTecnicas;

	@Column
	private BigDecimal verba;

	@Column
	private String tempoEstimado;

	@Column
	private Boolean ativo = true;

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

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getTagTecnicas() {
		return tagTecnicas;
	}

	public void setTagTecnicas(String tagTecnicas) {
		this.tagTecnicas = tagTecnicas;
	}

	public BigDecimal getVerba() {
		return verba;
	}

	public void setVerba(BigDecimal verba) {
		this.verba = verba;
	}

	public String getTempoEstimado() {
		return tempoEstimado;
	}

	public void setTempoEstimado(String tempoEstimado) {
		this.tempoEstimado = tempoEstimado;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

}
