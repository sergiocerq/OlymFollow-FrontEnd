import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth";

/**
 * @description Configuração do Firebase para o projeto Olympics Follow.
 *
 * @example
 * import { firebaseConfig } from './firebaseConfig';
 * const app = initializeApp(firebaseConfig);
 *
 * @constant {Object} firebaseConfig - As configurações do Firebase.
 * @property {string} apiKey - A chave da API do Firebase.
 * @property {string} authDomain - O domínio de autenticação do Firebase.
 * @property {string} projectId - O ID do projeto do Firebase.
 * @property {string} storageBucket - O bucket de armazenamento do Firebase.
 * @property {string} messagingSenderId - O ID do remetente de mensagens do Firebase.
 * @property {string} appId - O ID do aplicativo do Firebase.
 */

export const firebaseConfig = {
    apiKey: "AIzaSyDzpmH9YmFjiAINJOvgqy521Nh3URq30ug",
    authDomain: "olymfollow-4bfd2.firebaseapp.com",
    projectId: "olymfollow-4bfd2",
    storageBucket: "olymfollow-4bfd2.appspot.com",
    messagingSenderId: "439079175453",
    appId: "1:439079175453:web:70b26860924d6b1f2b4df4",
    measurementId: "G-23NRKQ1LKE"
};

var auth = null;
const app = initializeApp(firebaseConfig);

if(app){
    auth = getAuth(app);
}

export default auth;