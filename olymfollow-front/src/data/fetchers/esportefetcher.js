import axios from "axios";
import { Esporte } from "../classes/esporte";
import { DataFetcher } from "./DataFetcher";

/**
 * 
 * @extends DataFetcher
 * @method get - Método que faz uma requisição GET para a API e retorna uma lista de esportes
 */
export class EsporteFetcher extends DataFetcher {
  async getEsportes() {
    const data = await this.httpService.get("/esportes");
    return data.map((esporte) => new Esporte(esporte));
  }
}
