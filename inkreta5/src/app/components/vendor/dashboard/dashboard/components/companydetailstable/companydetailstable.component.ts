import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getcompanytable, nullcompanytable } from '../../../Actions/company.action';
import { getcompanyintablestate } from '../../../Selectors/dashboard.selector';
import { CompanydetailsService } from './companydetails.service';

export interface PeriodicElement {
  invoicenum: string;
  Date:string;
  company_name: string;
  Amount: number;
  invoiceduedate: string;
  StatusOfInv:string;
  Action:Array<any>;
  Balance:number;
  Age:number
  Probability:string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {invoicenum : '15b81a05a5', Date: '12-1-2021', company_name: 'Doctor Reddys Laboratoraries',Balance:5000 , Amount:50000,invoiceduedate :'10-2-2021',StatusOfInv:'Partial/Current',Age:9,Probability:'10%',Action:["Update status","Raise Query","History"]},
  {invoicenum : '15b81a05a6', Date: '1-11-2021', company_name: 'capgemini consultancy',Balance:5000 , Amount:20000,invoiceduedate :'10-12-2021',StatusOfInv:'Current',Age:9 ,Probability:'10%',Action:["Update status","Raise Query","History"]},
  {invoicenum : '15b81a05a7', Date: '12-10-2021', company_name: 'Attra Company',Balance:5000 , Amount:30000,invoiceduedate :'10-11-2021',StatusOfInv:'Partial/Current',Age:9,Probability:'90%',Action:["Raise Query"] },
  {invoicenum : '15b81a05a8', Date: '12-9-2021', company_name: 'tecnics integratrion limited',Balance:5000,Amount: 150000,invoiceduedate :'10-10-2021',StatusOfInv:'Partial/Current',Age:9,Probability:'90%',Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a9', Date: '12-8-2021', company_name: 'Doctor Reddys Laboratoraries',Balance:5000,Amount: 35000,invoiceduedate :'10-9-2021',StatusOfInv:'Partial/Current',Age:9,Probability:'90%',Action:["Update status","Raise Query"]},
  // {invoicenum : '15b81a05a10', Date: '1-11-2021', company_name: 'Doctor Reddys Laboratoraries',Balance:5000, Amount:5000,invoiceduedate :'10-12-2021',StatusOfInv:'Onhold',Age:9 ,Probability:'90%',Action:["Update status","Raise Query"]},
  // {invoicenum : '15b81a05a11', Date: '12-10-2021', company_name: 'Doctor Reddys Laboratoraries',Balance:5000,Amount: 70000,invoiceduedate :'10-11-2021',StatusOfInv:'Onhold',Age:9,Probability:'90%',Action:["Raise Query"] },
  // {invoicenum : '15b81a05a12', Date: '12-9-2021', company_name: 'Doctor Reddys Laboratoraries',Balance:5000, Amount:60000,invoiceduedate :'10-10-2021',StatusOfInv:'Query',Age:9,Probability:'90%',Action:["Update status","Raise Query"]},
  // {invoicenum : '15b81a05a13', Date: '12-8-2021', company_name: 'Doctor Reddys Laboratoraries',Balance:5000,Amount: 35000,invoiceduedate :'10-9-2021',StatusOfInv:'New',Age:9,Probability:'90%',Action:["Update status","Raise Query"]},

];
@Component({
  selector: 'app-companydetailstable',
  templateUrl: './companydetailstable.component.html',
  styleUrls: ['./companydetailstable.component.css']
})
export class CompanydetailstableComponent implements OnInit {
  displayedColumns= ['invoicenum','invoicedate','balance','paid_amount','total_invoice_value','invoice_status','invoice_duedate','age']
  dataSource:any
  //= new MatTableDataSource<any>(ELEMENT_DATA);
  service1: any;
  constructor(private service:CompanydetailsService,private store:Store,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.store.dispatch(nullcompanytable())
    this.store.dispatch(getcompanytable({id:id}))
    this.service1 = this.store.select(getcompanyintablestate).subscribe((data:any)=>{
      console.log(data)
      if(data?.result){
        console.log(data)
          if(data?.result?.hasError){

          }
          else{
            this.service.length.next(data?.result?.results.length)
            console.log(data?.result?.results.length)
             this.dataSource= new MatTableDataSource<any>(data?.result?.results);

          // this.dataSource.paginator=this.paginator
          // this.dataSource.sort = this.sort;
          }
      }

    })

  }

}
