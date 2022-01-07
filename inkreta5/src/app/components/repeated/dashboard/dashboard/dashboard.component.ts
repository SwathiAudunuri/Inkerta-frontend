import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { gettotalcompaniesstat, nulltotalcompaniesstat } from 'src/app/components/vendor/dashboard/Actions/totalcompanystat.action';
import { getcompanystatState } from 'src/app/components/vendor/dashboard/Selectors/dashboard.selector';
import { LayoutService } from 'src/app/layout/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  service1: any;
  data: any;

  constructor(private layout:LayoutService,private store:Store) { }

  ngOnInit(): void {
    this.layout.href.next("#/app/businesspartner_manager/common/simulate")
    this.layout.link.next("Simulate cash flows")
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
  }
  ngOnDestroy(){
    this.layout.link.next("")
    // document.getElementById('historical')?.remove()
  }
}
