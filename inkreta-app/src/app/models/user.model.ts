export class User {
    constructor(
      private user: string,
      private tokens: string,
      private partnerId : string
  
    ) {}
  

  
    get userToken() {
      return this.tokens;
    }
  }