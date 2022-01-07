import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabGroup } from '@angular/material/tabs';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';
import { getcustomerInvoiceListHistory } from '../../../Actions/invoicelisthistory.actions';
import { getHistoryinvoicelist } from '../../../Selectors/invoice.selector';
import { InvoiceInlineComponent } from '../invoice-inline/invoice-inline.component';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
export interface PeriodicElement {
  status: string;
  date: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { status: 'PAID', date: '24-08-21', description: 'invoice was paid in full' },
  { status: 'OVERDUE', date: '20-08-21', description: 'A late payment reminder was sent to your client' },
  { status: 'PARTIAL', date: '18-08-21', description: 'A payment was received' },
  { status: 'VIEWED', date: '15-08-21', description: 'Your client viewed the invoicce' },
  { status: 'SENT', date: '10-08-21', description: 'invoice sent to your client' },
  { status: 'DRAFT', date: '09-08-21', description: 'invoice was created' },
];
@Component({
  selector: 'app-invoice-history',
  templateUrl: './invoice-history.component.html',
  styleUrls: ['./invoice-history.component.css']
})
export class InvoiceHistoryComponent implements OnInit {
  limitTextHeight = true
  invoicelistdetails: any;
  loadhistory = new BehaviorSubject<boolean>(false)
  @ViewChild('print', { static: false }) tab!: InvoiceInlineComponent;
  @Input() index: any;
  status: any
  hisloading: any;
  service: any;
  service1: any;
  historydata: any = [];
  test!: string;
  showmore: boolean = false;
  test1!: string;
  largestring!: boolean;
  showless!: boolean;
  isReadMore: any;
  invoice_status_tracker_id: any;
  previewsDoc_ref_id: any;
  @Input() external: any;
  constructor(private store: Store, public unpaid: UnpaidService) { }

  ngOnInit(): void {
    this.service = this.unpaid.changetab.subscribe((value) => {
      // if (this.previewsDoc_ref_id !== this.unpaid.ref) {
        if (value) {
          if (this.unpaid.tab === this.index) {
            // this.store.dispatch(getcustomerInvoiceListHistory({doc_refid : this.unpaid.ref}))

            if (this.external) {
              //new
              var url = Constants.ExternalCustInvoiceServiceHistory + this.unpaid.ref
              this.store.dispatch(getcustomerInvoiceListHistory({ url: url }))
            }
            else {
              var url = Constants.CustInvoiceServiceHistory + this.unpaid.ref
              this.store.dispatch(getcustomerInvoiceListHistory({ url: url }))
            }
            // this.loadhistory.next(true)
          }
        }
      // }
    })
    this.getdata()
  }
  displayedColumns: string[] = ['Action', 'ActionDate', 'ActionBy', 'Comments'];
  private data = new BehaviorSubject<any[]>([]);
  dataSource: any;
  readmore(value: any) {
    this.isReadMore = "isReadMore"
    this.invoice_status_tracker_id = value.invoice_status_tracker_id

  }
  getdata() {
    this.service1 = this.unpaid.loadhistory.subscribe((l) => {
      if (l) {
        if (this.unpaid.tab === this.index) {
          // //console.warn(this.tab)
          this.dataSource = []
          if (this.external) {
            //new
            var url = Constants.ExternalCustInvoiceServiceHistory + this.unpaid.ref
            this.store.dispatch(getcustomerInvoiceListHistory({ url: url }))
          }
          else {
            var url = Constants.CustInvoiceServiceHistory + this.unpaid.ref
            this.store.dispatch(getcustomerInvoiceListHistory({ url: url }))
          }
          this.loadhistory.next(true)
          //console.warn(l)
        }
      }
    })
    this.loadhistory.subscribe(() => {
      // .select(getHistoryinvoicelist)
      this.store.select(getHistoryinvoicelist).subscribe((data: any) => {
        //console.log(data)

        this.hisloading = data.loading
        if (data) {

          if (data?.history) {
            if (data?.history?.hasError) {

            }
            else {
              this.hisloading = data.loading
              // this.previewsDoc_ref_id = data.doc_refid

              if (data?.history?.results) {
                //console.log(data?.history?.results?.length)
                if (data?.history?.results?.length === 0) {
                  this.status = false
                }
                else {

                  this.status = true
                  this.invoicelistdetails = data.history.results
                  this.historydata = this.invoicelistdetails
                  this.data.next(this.invoicelistdetails)
                  this.dataSource = this.alter()
                  this.loadhistory.complete()
                }
              }
            }
          }

        }

      })

    })



  }
  more() {
    this.showmore = false
    this.test = this.test1
    this.showless = true
  }
  less() {
    // this.largestring = false
    this.showless = false
    this.test = this.test1.slice(0, 110)
    this.showmore = true
  }
  alter() {
    return (this.data.asObservable())
  }
  ngOnDestroy() {
    this.service.unsubscribe()
    this.service1.unsubscribe()
  }

}
