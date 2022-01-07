import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { gettotalcompanieslist, nulltotalcompanieslist } from '../../../Actions/totalcompanieslist.action';
import { getcompanyclosedintableState, getcompanyclosedinvoicesummaryState, getcompanylistState, getcompanystatState } from '../../../Selectors/dashboard.selector';
import {faCheckSquare, faFileAlt,faFileInvoiceDollar,faHistory,faDraftingCompass,faFileContract} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { getcompanyclosedsummary, nullcompanyclosedsummary } from '../../../Actions/closedsummarycompany.action';
import { gettotalcompaniesclosedinvlist, nulltotalcompaniesclosedinvlist } from '../../../Actions/totalcompaniesclosedinvlist.action';

@Component({
  selector: 'app-totalcompaniesbypaidinvoices',
  templateUrl: './totalcompaniesbypaidinvoices.component.html',
  styleUrls: ['./totalcompaniesbypaidinvoices.component.css']
})
export class TotalcompaniesbypaidinvoicesComponent implements OnInit {
  faFileAlt:any=faFileAlt
  faFileInvoiceDollar:any=faFileInvoiceDollar
  faHistory:any=faHistory
  faDraftingCompass:any=faDraftingCompass
  faFileContract:any =faFileContract
  faCheckSquare:any=faCheckSquare;
  displayedColumns:any
  //= ['company_name','Score','Current','1-30days','30-60days','60-90days','>90days','Oldest Invoice','Balance Due'];
  Action=["Update status","Raise Query","Send Reminder"]
  @ViewChild(MatPaginator, {static: false}) paginator:any;
  @ViewChild(MatSort) sort:MatSort[]=[];
  service2: any;
  service1: any;
  data: any;
  loaded: boolean=true;
  constructor(private store:Store,private router:Router) { }
  dataSource:any;


  ngOnInit(): void {
    this.store.dispatch(nullcompanyclosedsummary())
    this.store.dispatch(getcompanyclosedsummary())
    this.service1= this.store.select(getcompanyclosedinvoicesummaryState).subscribe((data:any)=>{
      console.log(data)
      if(data?.result){
        console.log(data)
          if(data?.result?.hasError){
 
          }
          else{
            console.log(data)
            this.data=data.result.results[1]
          //  this.dataSource= new MatTableDataSource<any>(data?.result?.results);
          //  this.displayedColumns= ['customer_company_name','rating','noofinvoices','current','oneto30days','thirtyoneto60days',
          // 'sixtyoneto90days','over90days','balancedue']
          // this.dataSource.paginator=this.paginator
          // this.dataSource.sort = this.sort;
          }
      }

    })
  
    
    this.store.dispatch(nulltotalcompaniesclosedinvlist())
    this.store.dispatch(gettotalcompaniesclosedinvlist())
    //this.dataSource= new MatTableDataSource<any>(ELEMENT_DATA);
    this.service2 = this.store.select(getcompanyclosedintableState).subscribe((data:any)=>{
      console.log(data)
      if(data?.result){
        console.log(data)
          if(data?.result?.hasError){
            // current: null
            // customer_company_name: "Utech pvt Limitted"
            // customer_partner_id: "BP10173"
            // isexternal: true
            // noofinvoices: 1
            // oneto30days: 53000
            // over90days: null
            // overdue: 53000
            // rating: "A"
            // sixtyoneto90days: null
            // thirtyoneto60days: null
            // transaction_type: "receivable"
            // vendor_company_name: "INDIAn DRUGS & PHARMACEUTICALS LIMITED"
            // vendor_partner_id: "BP10173"
          }
          else{
            
            console.log(data)
           this.dataSource= new MatTableDataSource<any>(data?.result?.results);
           this.displayedColumns= ['customer_company_name','rating','noofinvoices','current','oneto30days','thirtyoneto60days',
          'sixtyoneto90days','over90days','balancedue']
          this.dataSource.paginator=this.paginator
          this.dataSource.sort = this.sort;
          this.loaded=true
          }
      }

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  // sortData(sort:Sort) {
  //   //console.log(event)
  //   const data = this.dataSource.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.dataSource = data;
  //     return;
  //   }

  //   this.dataSource = data.sort((a:any, b:any) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'customer_company_name': return compare(a.customer_company_name, b.customer_company_name, isAsc);
  //       case 'rating': return compare(a.rating, b.rating, isAsc);
  //       case 'noofinvoices': return compare(a.fat, b.fat, isAsc);
  //       case 'current': return compare(a.noofinvoices, b.noofinvoices, isAsc);
  //       case 'oneto30days': return compare(a.oneto30days, b.oneto30days, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
  gotocompany(item:any){
    //const dashboardroute='app/' +this.data.results.roles[0]+'/dashboard/default'
    const companyroute='/app/businesspartner_manager/vendor/paidcompanydetails/' +item
    this.router.navigate([companyroute])
    console.log(item)
  } 

}
