export class User {
    constructor(
      private user: string,
      private tokens: string,
      private roles:String,
      private firstName:String,
      private lastName:String,
      private partnerId:String,
      private partnerName:String,
      private email:String

  
    ) {}
  

  
    get userToken() {
      return this.tokens;
    }
  }