import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getclosedinvfromcompany, nullclosedinvfromcompany } from '../../../Actions/closedinvfromcompany.action';
import { getcompanytable, nullcompanytable } from '../../../Actions/company.action';
import { getclosedinvfromcompanyState, getcompanyintablestate } from '../../../Selectors/dashboard.selector';
import { ClosedinvfromcompanyService } from './closedinvfromcompany.service'

@Component({
  selector: 'app-closedinvsofcompanytable',
  templateUrl: './closedinvsofcompanytable.component.html',
  styleUrls: ['./closedinvsofcompanytable.component.css']
})
export class ClosedinvsofcompanytableComponent implements OnInit {

  displayedColumns= ['invoicenum','invoicedate','balance','paid_amount','total_invoice_value','invoice_status','invoice_duedate','age']
  dataSource:any
  service1: any;
  constructor(private service:ClosedinvfromcompanyService,private store:Store,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.store.dispatch(nullclosedinvfromcompany())
    this.store.dispatch(getclosedinvfromcompany({id:id}))
    this.service1 = this.store.select(getclosedinvfromcompanyState).subscribe((data:any)=>{
      console.log(data)
      if(data?.result){
        console.log(data)
          if(data?.result?.hasError){

          }
          else{
            this.service.length.next(data?.result?.results.length)
            console.log(data?.result?.results)
             this.dataSource= new MatTableDataSource<any>(data?.result?.results);

          // this.dataSource.paginator=this.paginator
          // this.dataSource.sort = this.sort;
          }
      }

    })

  }

}
