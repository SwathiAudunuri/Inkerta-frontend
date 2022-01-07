import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService  implements ErrorHandler {

  constructor() {
    
   }

   handleError(error:Error) {
   // let router = this.injector.get(Router)
  //  //console.log('URL: ' + router.url);

//        router.navigate(['error']);

   // alert(error.message)
  //  alert(error.message)
   console.error('An error occurred:', error.message);
  throw error;

 }
}
