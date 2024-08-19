export class User {
  constructor({user}) {
    this.username = user['username'];
    this.email = user['email'];
    this.inscricoes = user['inscricoes'];
    this.pictureUrl = user['pictureUrl'];
  }
}