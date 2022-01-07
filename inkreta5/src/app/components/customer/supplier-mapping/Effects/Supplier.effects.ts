import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { AddSupplier, AddSupplierSucess } from "../Actions/Add_Supplier.actions";
import { SelectList, SelectListSuccess } from "../Actions/SelectList.actions";
import { SupplierList, SupplierListSuccess } from "../Actions/SupplierList.actions";

@Injectable()
export class SupplierEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){
    }
    
    SupplierList=createEffect(()=>
    this.action.pipe(
        ofType(SupplierList),
        mergeMap((url)=>this.service.getAllRecords(url).pipe(
            map(suppliers=>(SupplierListSuccess({suppliers}))))
        )
    )
    )

    SelectList=createEffect(()=>
    this.action.pipe(
        ofType(SelectList),
        mergeMap((url)=>this.service.getAllRecords(url).pipe(
            map(selectlist=>(SelectListSuccess({selectlist}))))
        )
    )
    )

    AddSupplier=createEffect(()=>
    this.action.pipe(
        ofType(AddSupplier),
        //tap((data)=>//console.log(data)),
        mergeMap((value:any)=>this.service.postAllRecords({url : value.url,data:value.data}).pipe(
            map(result=>
                (AddSupplierSucess({result}))              
            ))
        )
    )
    ) 

}