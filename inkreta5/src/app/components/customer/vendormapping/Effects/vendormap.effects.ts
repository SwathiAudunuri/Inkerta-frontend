import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, tap } from "rxjs/operators";
import { addVendorList, addVendorListSuccess, deleteVendor, deleteVendorSuccess, getVendorDetailsList, getVendorDetailsListSuccess, getVendorList, getVendorListSuccess, statusactiveVendor, statusactiveVendorSuccess, statusinactiveVendor, statusinactiveVendorSuccess, updateVendorList, updateVendorListSucess } from "../Actions/vendormap.action";
import { VendorDetail, VendorMap } from "../Models/vendormap.model";
import { VendorserviceService } from "../vendorservice.service";

@Injectable()
export class VendorEffects{
    constructor(private action$ : Actions,private Vendorservice : VendorserviceService){}
 
    loaddata$= createEffect(()=>{
        return this.action$.pipe(ofType(getVendorList),
        // //tap((data)=>//console.log(data)),
        concatMap(()=>{
            return this.Vendorservice.getDetails1().pipe(
                map((suppliers: readonly VendorMap[])=>getVendorListSuccess(suppliers))
            )
        })
        )
    })

    loaddetaildata$ =createEffect(()=>{
        return this.action$.pipe(ofType(getVendorDetailsList),
        // //tap((data)=>//console.log(data)),
        concatMap(()=>{
            return this.Vendorservice.getVendorDetails1().pipe(
                map((supplierDetail: readonly VendorDetail[])=>getVendorDetailsListSuccess(supplierDetail))
            )
        })
        )
    })
  
    adddata$ = createEffect(()=>{
        return this.action$.pipe(ofType(addVendorList),
        // //tap((data)=>//console.log(data)),
        concatMap((newvendor)=>{
            return this.Vendorservice.submitVendorDetails1(newvendor).pipe(
                map((supplieradd)=>addVendorListSuccess(supplieradd))
            )
        })
        )
    })

    updatedata$ = createEffect(()=>{
        return this.action$.pipe(ofType(updateVendorList),
        // //tap((data)=>//console.log(data)),
        concatMap((updatevendor,id)=>{
            return this.Vendorservice.updateVendor1(updatevendor,id).pipe(
                map((supplierupdate)=>updateVendorListSucess(supplierupdate))
            )
        })
        )
    })

    deletedata$ = createEffect(()=>{
        return this.action$.pipe(ofType(deleteVendor),
        // //tap((data)=>//console.log(data)),
        concatMap((data)=>{
            return this.Vendorservice.deleteVendor1(data.suppliers).pipe(
                map((supplierdelete)=>deleteVendorSuccess(supplierdelete))
            )
        })
        )
    })

    inactivedata$ = createEffect(()=>{
        return this.action$.pipe(ofType(statusinactiveVendor),
        // //tap((data)=>//console.log(data)),
        concatMap((data)=>{
            return this.Vendorservice.changeStatusInactive1(data.suppliers).pipe(
                map((supplierinactive)=>statusinactiveVendorSuccess(supplierinactive))
            )
        })
        )
    })

    activedata$ = createEffect(()=>{
        return this.action$.pipe(ofType(statusactiveVendor),
        // //tap((data)=>//console.log(data)),
        concatMap((data)=>{
            return this.Vendorservice.changeStatusActive1(data.suppliers).pipe(
                map((supplieractive)=>statusactiveVendorSuccess(supplieractive))
            )
        })
        )
    })
}