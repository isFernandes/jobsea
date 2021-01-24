package br.com.jobsea.filters;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.jobsea.login.LoginService;

@Component
public class AuthFilter implements Filter {

	@Autowired
	private LoginService loginService;

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest request = (HttpServletRequest) servletRequest;
		HttpServletResponse response = (HttpServletResponse) servletResponse;

		String url = request.getRequestURL().toString();
		String path = request.getRequestURI();

		if ("/api/login".equals(path) || "/api/login/".equals(path)) {
			chain.doFilter(servletRequest, servletResponse);
		} else {

			String authorization = request.getHeader("Authorization");
			if (!"".equals(authorization) && null != authorization) {
				if (loginService.verifedUserAuth(authorization)) {
					chain.doFilter(servletRequest, servletResponse);
				}
			} else {
				PrintWriter out = response.getWriter();

				out.println("{'reponse': 'Not authorization.'}");
			}
		}

	}

}
