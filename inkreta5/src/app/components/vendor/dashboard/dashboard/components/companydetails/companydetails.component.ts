import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTachometerAlt,faCheckSquare,faFileAlt,faFileInvoiceDollar,faHistory,faDraftingCompass,faFileContract} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { getcompanycontactdetails, nullcompanycontactdetails } from '../../../Actions/companycontactdetails.action';
import { getcompanysummary, nullcompanysummary } from '../../../Actions/companysummary.action';
import { getcompanycontactdetailsState, getcompanysummaryState } from '../../../Selectors/dashboard.selector';
import { CompanydetailsService } from '../companydetailstable/companydetails.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  faFileAlt:any=faFileAlt
  faFileInvoiceDollar:any=faFileInvoiceDollar
  faHistory:any=faHistory
  faDraftingCompass:any=faDraftingCompass
  faFileContract:any =faFileContract;
  faTachometerAlt:any=faTachometerAlt;
  faCheckSquare:any=faCheckSquare;
  service1: any;
  data: any;
  service2: any;
  data1: any;
  inv: any;
  constructor(private service:CompanydetailsService,private store:Store,private route: ActivatedRoute) { }
  changeText:any="false"
  ngOnInit(): void {
    this.service.length.subscribe(data=>{
      this.inv=data
      console.log(data)
    })
    const id = this.route.snapshot.params['id'];
    this.store.dispatch(nullcompanycontactdetails())
    this.store.dispatch(getcompanycontactdetails({id:id}))

    this.getcompanycontactData()
    this.store.dispatch(nullcompanysummary())
    this.store.dispatch(getcompanysummary({id:id}))
    this.getsummaryData()
  }
  getcompanycontactData(){
    this.service2 = this.store.select(getcompanycontactdetailsState).subscribe((data:any)=>{
      console.log(data)
      if(data?.result){
        console.log(data)
          if(data?.result?.hasError){

          }
          else{
            this.data1=data?.result?.results[0]
            console.log(data?.result?.results[0])
         
          }
      }

    })
  }
  getsummaryData(){
    this.service1 = this.store.select(getcompanysummaryState).subscribe((data:any)=>{
      console.log(data)
      if(data?.result){
        console.log(data)
          if(data?.result?.hasError){

          }
          else{
            this.data=data?.result?.results[0]
            console.log(data?.result?.results)
         
          }
      }

    })
  }

}
