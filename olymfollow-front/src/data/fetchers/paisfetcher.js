import { DataFetcher } from "./DataFetcher";
import {Pais} from "../classes/pais.js";

/**
 * 
 * @extends DataFetcher
 * 
 * @method getPaises - Método que faz uma requisição GET para a API e retorna uma lista de países
 */
export class PaisFetcher extends DataFetcher {
  async getPaises() {
    const response = await this.httpService.get("/countries");
    return response.data.map((pais) => new Pais(pais));
  }
}
