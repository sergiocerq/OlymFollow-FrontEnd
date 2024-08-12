import { DataFetcher } from "./DataFetcher";

/**
 * 
 * @extends DataFetcher
 * 
 * @method getPaises - Método que faz uma requisição GET para a API e retorna uma lista de países
 */
export class PaisFetcher extends DataFetcher {
  static async getPaises() {
    const data = await this.httpService.get("/Olymfollow/paises");
    return data.map((pais) => new Pais(pais));
  }
}
