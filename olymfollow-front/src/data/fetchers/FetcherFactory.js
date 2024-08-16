import { EsporteFetcher } from "./esportefetcher";
import { HttpService } from "./HttpService";
import { LoginFetcher } from "./login";
import { MedalhaFetcher } from "./medalfetcher";
import { PaisFetcher } from "./paisfetcher";
import { RegisterFetcher } from "./Register";
import {UserFetcher} from "./userFetcher.js";

export class FetcherFactory {

  constructor() {
    this.httpService = new HttpService();
  }

  createEsporteFetcher() {
    return new EsporteFetcher(this.httpService);
  }

  createPaisFetcher() {
    return new PaisFetcher(this.httpService);
  }

  createMedalhaFetcher() {
    return new MedalhaFetcher(this.httpService);
  }

  createLoginFetcher() {
    return new LoginFetcher(this.httpService);
  }

  createRegisterFetcher() {
    return new RegisterFetcher(this.httpService);
  }

  createUserFetcher(){
    return new UserFetcher(this.httpService);
  }
}