import { DataFetcher } from "./DataFetcher";

/**
 * 
 * @extends DataFetcher
 * 
 * @method login - Método que faz uma requisição POST para a API e retorna um objeto de usuário
 */
export class LoginFetcher extends DataFetcher {
  async login(email, senha) {
    const response = await super.httpService.client.login("/login", email, senha);
    return response.data;
  }
}
