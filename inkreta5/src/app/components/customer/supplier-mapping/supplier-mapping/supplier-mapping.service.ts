import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    constructor() { }

    sidenav = new BehaviorSubject<any>(true)
    addview = new BehaviorSubject<any>(false)

    error = new BehaviorSubject<any>(null)
}