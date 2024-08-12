import axios from "axios";
import { QuadroMedalha } from "../classes/quadroMedalha";
import { DataFetcher } from "./DataFetcher";

/**
 * 
 * @extends DataFetcher
 * 
 * @method getMedals - Método que faz uma requisição GET para a API e retorna uma lista de medalhas
 * @method getMedalsByCountry - Método que faz uma requisição GET para a API e retorna uma lista de medalhas de um país
 * @method getLatestMedals - Método que faz uma requisição GET para a API e retorna uma lista das últimas medalhas
 */

export class MedalhaFetcher extends DataFetcher {
  static async getMedals() {
    const data = await this.httpService.get("/Olymfollow/medalhas");
    return data.map((medal) => new QuadroMedalha(medal));
  }

  static async getMedalsByCountry(country) {
    const data = await this.httpService.get(`/OlymFollow/medalhas/${country}`);
    return data.map((medal) => new QuadroMedalha(medal));
  }

  static async getLatestMedals() {
    const data = await this.httpService.get("/OlymFollow/medalhas/latest");
    return data.map((medal) => new QuadroMedalha(medal));
  }
}
