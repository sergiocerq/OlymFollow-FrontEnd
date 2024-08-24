import { useState } from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory";
import { toast } from "sonner";
import { styleToastError } from "../../styles";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {handleToken} from "../../utils.js";


/**
 * Hook customizado useRegister para gerenciar a lógica de registro de novos usuários.
 *
 * @description Este hook fornece a lógica necessária para validar os dados de registro, comunicar-se com a API de registro,
 * e gerenciar o estado de carregamento, erro e sucesso durante o processo de registro.
 *
 * @returns {Object} - Retorna um objeto contendo as funções e estados necessários para o registro.
 * @returns {Function} register - Função para iniciar o processo de registro com os dados fornecidos.
 * @returns {boolean} isLoading - Estado que indica se o processo de registro está em andamento.
 * @returns {string} error - Mensagem de erro, se houver, durante o processo de registro.
 * @returns {boolean} success - Estado que indica se o registro foi bem-sucedido.
 *
 * @example
 * const { register, isLoading, error, success } = useRegister();
 *
 * // Chamar a função de registro com os dados do formulário
 * register({ username: "user", email: "user@example.com", password: "password", confirmPassword: "password" });
 * 
 * @see {@link http://localhost:5173/register} para ver a página de registro que utiliza
 * 
 * @returns {Object} O objeto contendo as funções e estados necessários para o registro.
 */
export const useRegister = () => {
  const navigator = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  /**
   * 
   * @description Função handleSubmit para enviar os dados de registro para a API.
   * 
   * @param {Function} setIsLoading - Função para atualizar o estado de carregamento.
   * 
   * @returns {Promise<void>}
   */
  const handleSubmit = async (setIsLoading) => {
    validateCredentials();

    if(isInvalidPassword) return;
    setIsLoading(true);
    await axios.post("http://localhost:8084/olympics-follow-api/user/register", {
      email: register.email,
      password: register.password,
      username: register.username,
    }).catch(reason => {
      if(reason.response.status === 400){
        reason.response.data.foreach((value) => {
          toast.error(value, {
            style: styleToastError,
            duration: 3000,
          });
        });
        return;
      }
      toast.error(reason.response.data, {
        style: styleToastError,
        duration: 3000,
      });
    }).then(response => {
      if(response.status === 201) {
        let token = handleToken(response.headers['authorization']);
        let userID = response.headers['userid'];
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userID", userID);
        navigator("/");
      }
    });
  };

  /**
   * 
   * @description Função validateCredentials para validar os dados de registro.
   * 
   * @returns {void}
   */
  const validateCredentials = () => {
    if (register.username === "" || !register.username) {
      setIsInvalidPassword(true);
      toast.error("Nome inválido. Por favor, insira um nome válido.", {
        style: styleToastError,
        duration: 3000,
      });
    }
    if (register.email === "" || !register.email.includes("@")) {
      setIsInvalidPassword(true);
      toast.error("Email inválido. Por favor, insira um email válido.", {
        style: styleToastError,
        duration: 3000,
      });
    }
    if (!register.password || register.password.length < 4) {
      setIsInvalidPassword(true);
      toast.error("Senha inválida. Por favor, insira uma senha válida.", {
        style: styleToastError,
        duration: 3000,
      });
    }
    if (register.password !== register.passwordConfirmation) {
      setIsInvalidPassword(true);
      toast.error("Senhas não conferem. Por favor, insira senhas iguais.", {
        style: styleToastError,
        duration: 3000,
      });
    }
  };

  return {
    register,
    setRegister,
    showPassword,
    setShowPassword,
    handleSubmit,
    isInvalidPassword,
    setIsInvalidPassword,
    showConfirmationPassword,
    setShowConfirmationPassword,
  };
};
