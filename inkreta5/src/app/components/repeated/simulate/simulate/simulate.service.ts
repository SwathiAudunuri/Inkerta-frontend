import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SimulateService {

    constructor() { }

    receviables_total = new BehaviorSubject<any>(null)
    payables_total = new BehaviorSubject<any>(null)

    bank_balance = new BehaviorSubject<any>(null)
    toggle = new BehaviorSubject<any>(null)
receivables = new BehaviorSubject<any>(null)
    receivables1 = new BehaviorSubject<any>(null)
payables = new BehaviorSubject<any>(null)

budgetdetails = new BehaviorSubject<any>(null)
}    