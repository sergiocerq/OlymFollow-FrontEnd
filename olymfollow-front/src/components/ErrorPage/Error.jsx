import React from "react";
import "./error.css";
import errorSVG from "../../assets/error.svg";
import { useNavigate } from "react-router-dom";

/**
 *
 * @returns Componente que renderiza a página de erro 404.
 * @name Error
 */
export const Error = () => {

  const navigate = useNavigate();

  return (
    <div className="error-div">
      <ul>
        <li><p>Oooops! Aparentemente ocorreu um erro no sistema.</p></li>
        <li><p>Por favor, tente novamente mais tarde.</p></li>
        <li><button onClick={() => navigate(-1)}>Voltar</button></li>
      </ul>

      <img src={errorSVG} alt="" width="700px" />
    </div>
  );
};
