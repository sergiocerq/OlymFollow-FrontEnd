import axios from "axios";

/**
 * 
 * @class DataFetcher
 * @description Classe que representa um fetcher de dados
 * 
 * @param {Object} httpService - Serviço HTTP a ser utilizado
 */
export class DataFetcher {
  constructor(httpService) {
    this.httpService = httpService;
  }
}