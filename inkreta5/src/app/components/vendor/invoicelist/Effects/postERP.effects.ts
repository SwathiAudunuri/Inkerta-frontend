// import { Injectable } from "@angular/core";
// import { createEffect ,Actions, ofType} from "@ngrx/effects";
// import { Store } from "@ngrx/store";
// import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
// import { CommonService } from "src/app/common.service";
// import { Constants } from "src/app/constants/constants";
// import { getERPData, getERPDataSucess } from "../Actions/postERP.action";

// @Injectable()
// export class VendorInvoiceQrCodeEffects{ 
//     constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){}
//     loadQuery$=createEffect(()=>
//         this.action.pipe(
//             ofType(getERPData),
//             //tap((data)=>//console.log(data)),
//             // {url : Constants.InvoiceQRcode+value.doc_refid}
//             mergeMap((value:any)=>this.invoiceservice.getAllRecords({url : Constants.InvoiceQRcode+value.doc_refid}).pipe(
//                 map(result=>
//                     (getERPDataSucess({result}))              
//                 ))
//             )
//         )
//     )
// }