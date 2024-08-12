import React, { useState } from "react";
import "./login.css";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";

const fetcherFactory = new FetcherFactory();

const Login = () => {

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const loginFetcher = fetcherFactory.createLoginFetcher();
    const user = await loginFetcher.login(login.email, login.password);
  }

  return (
      <>
        <form className="form">
          <p className="form-title">Entre na sua conta</p>
          <div className="input-container">
            <input placeholder="Digite o email" type="email"/>
            <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </span>
          </div>
          <div className="input-container">
            <input placeholder="Digite a senha" type="password"/>

            <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
              <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </span>
          </div>
          <button className="submit" type="submit">
            Sign in
          </button>

          <p className="signup-link">
            Sem conta?
            <a href="">Cadastrar</a>
          </p>
        </form>
      </>
  );
}
export default Login;
