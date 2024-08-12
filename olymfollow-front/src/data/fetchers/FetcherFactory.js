import { EsporteFetcher } from "./esportefetcher";
import { HttpService } from "./HttpService";
import { LoginFetcher } from "./login";
import { MedalhaFetcher } from "./medalfetcher";
import { PaisFetcher } from "./paisfetcher";

export class FecherFactory {

  constructor() {
    this.httpService = new HttpService();
  }

  createEsporteFetcher() {
    return new EsporteFetcher(this.httpService);
  }

  createEsporteFetcher() {
    return new PaisFetcher(this.httpService);
  }

  createMedalhaFetcher() {
    return new MedalhaFetcher(this.httpService);
  }

  createLoginFetcher() {
    return new LoginFetcher(this.httpService);
  }
}