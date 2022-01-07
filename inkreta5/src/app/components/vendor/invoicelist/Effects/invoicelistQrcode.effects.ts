import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { getvendorInvoiceListQrCode, getvendorInvoiceListQrCodeSucess } from "../Actions/invoicelistQrcode.actions";

@Injectable()
export class VendorInvoiceQrCodeEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getvendorInvoiceListQrCode),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.invoiceservice.getAllRecords({url : Constants.InvoiceQRcode+value.doc_refid}).pipe(
                map(qrcode=>
                    (getvendorInvoiceListQrCodeSucess({qrcode}))              
                ))
            )
        )
    )
}