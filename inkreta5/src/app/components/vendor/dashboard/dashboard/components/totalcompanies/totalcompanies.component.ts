import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { gettotalcompanieslist, nulltotalcompanieslist } from '../../../Actions/totalcompanieslist.action';
import { getcompanylistState, getcompanystatState } from '../../../Selectors/dashboard.selector';
import { faFileAlt,faFileInvoiceDollar,faHistory,faDraftingCompass,faFileContract} from '@fortawesome/free-solid-svg-icons';
import { gettotalcompaniesstat, nulltotalcompaniesstat } from '../../../Actions/totalcompanystat.action';
import { Router } from '@angular/router';

export interface PeriodicElement {
  invoicenum: string;
 
  Date:string;
  company_name: string;
  '1-30days': string;
  '30-60days':string;
  '60-90days':string;
  '>90days':string;
  'Oldest Invoice':number;
  'Balance Due':string;
  Score:string
  invoiceduedate: string;
  StatusOfInv:string;
  Action:Array<any>;
  Current:string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {invoicenum : '15b81a05a5', Date: '12-1-2021', company_name: 'Doctor Reddys Laboratoraries',Score:'A',Current:'', '1-30days': '','30-60days': '','60-90days': '$50000','>90days': '$50000','Oldest Invoice':90,'Balance Due':'$270000',invoiceduedate :'10-2-2021',StatusOfInv:'New',Action:["Update status","Raise Query","History"]},
  {invoicenum : '15b81a05a6', Date: '1-11-2021', company_name: 'capgemini consultancy',Score:'B',Current:'', '1-30days': '','30-60days': '$50000','60-90days': '$50000','>90days': '$5000','Oldest Invoice':30,'Balance Due':'$270000',invoiceduedate :'10-12-2021',StatusOfInv:'Onhold', Action:["Update status","Raise Query","History"]},
  {invoicenum : '15b81a05a7', Date: '12-10-2021', company_name: 'Attra Company',Score:'C',Current:'$45000', '1-30days': '$30000','30-60days': '','60-90days': '','>90days': '','Oldest Invoice':40,'Balance Due':'$270000',invoiceduedate :'10-11-2021',StatusOfInv:'New',Action:["Raise Query"] },
  {invoicenum : '15b81a05a8', Date: '12-9-2021', company_name: 'tecnics integratrion limited',Score:'D',Current:'', '1-30days': '$150000','30-60days': '','60-90days': '','>90days': '$50000','Oldest Invoice':20,'Balance Due':'$270000',invoiceduedate :'10-10-2021',StatusOfInv:'Query',Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a9', Date: '12-8-2021', company_name: 'Doctor Reddys Laboratoraries',Score:'A',Current:'', '1-30days': '$35000','30-60days': '$250000','60-90days': '','>90days': '$450000','Oldest Invoice':60,'Balance Due':'$270000',invoiceduedate :'10-9-2021',StatusOfInv:'New',Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a10', Date: '1-11-2021', company_name: 'Doctor Reddys Laboratoraries',Score:'B',Current:'$45000', '1-30days': '','30-60days': '$350000','60-90days': '','>90days': '','Oldest Invoice':70,'Balance Due':'$270000',invoiceduedate :'10-12-2021',StatusOfInv:'Onhold', Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a11', Date: '12-10-2021', company_name: 'Doctor Reddys Laboratoraries',Score:'C',Current:'', '1-30days': '$70000','30-60days': '','60-90days': '$50000','>90days': '$350000','Oldest Invoice':10,'Balance Due':'$270000',invoiceduedate :'10-11-2021',StatusOfInv:'Onhold',Action:["Raise Query"] },
  {invoicenum : '15b81a05a12', Date: '12-9-2021', company_name: 'Doctor Reddys Laboratoraries',Score:'D',Current:'', '1-30days': '$60000','30-60days': '','60-90days': '$50000','>90days': '','Oldest Invoice':80,'Balance Due':'$270000',invoiceduedate :'10-10-2021',StatusOfInv:'Query',Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a13', Date: '12-8-2021', company_name: 'Doctor Reddys Laboratoraries',Score:'B',Current:'', '1-30days': '$35000','30-60days': '','60-90days': '$50000','>90days': '$450000','Oldest Invoice':20,'Balance Due':'$270000',invoiceduedate :'10-9-2021',StatusOfInv:'New',Action:["Update status","Raise Query"]},

];
@Component({
  selector: 'app-totalcompanies',
  templateUrl: './totalcompanies.component.html',
  styleUrls: ['./totalcompanies.component.css']
})
export class TotalcompaniesComponent implements OnInit {
  faFileAlt:any=faFileAlt
  faFileInvoiceDollar:any=faFileInvoiceDollar
  faHistory:any=faHistory
  faDraftingCompass:any=faDraftingCompass
  faFileContract:any =faFileContract
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
    this.store.dispatch(nulltotalcompaniesstat())
    this.store.dispatch(gettotalcompaniesstat())
    this.service1= this.store.select(getcompanystatState).subscribe((data:any)=>{
      console.log(data)
      if(data?.result){
        console.log(data)
          if(data?.result?.hasError){
 
          }
          else{
            console.log(data)
            this.data=data.result.results[0]
          //  this.dataSource= new MatTableDataSource<any>(data?.result?.results);
          //  this.displayedColumns= ['customer_company_name','rating','noofinvoices','current','oneto30days','thirtyoneto60days',
          // 'sixtyoneto90days','over90days','balancedue']
          // this.dataSource.paginator=this.paginator
          // this.dataSource.sort = this.sort;
          }
      }

    })
  
    
    this.store.dispatch(nulltotalcompanieslist())
    this.store.dispatch(gettotalcompanieslist())
    //this.dataSource= new MatTableDataSource<any>(ELEMENT_DATA);
    this.service2 = this.store.select(getcompanylistState).subscribe((data:any)=>{
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
    const companyroute='/app/businesspartner_manager/vendor/companydetails/' +item
    this.router.navigate([companyroute])
    console.log(item)
  } 

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
