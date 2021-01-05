package br.com.jobsea.util;

public enum EnumContentType {

	JSON("application/json"),
	MULTIPART_FORMDATA("multipart/form-data");

	EnumContentType(String text) {
		this.setValue(text);
	}

	private String value;

	public String getValue() {
		return value;
	}

	private void setValue(String value) {
		this.value = value;
	}

}
