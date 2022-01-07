import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetPatnerDetails, GetPatnerDetailsInitialValue } from 'src/app/components/repeated/patners/Actions/GetPatnerDetails.actions';
import { getPatnersdetailsState } from 'src/app/components/repeated/patners/Selectors/patners.selectors';
import { Constants } from 'src/app/constants/constants';
import { PatnersService } from '../../../../patners.service';

@Component({
  selector: 'app-patner-details',
  templateUrl: './patner-details.component.html',
  styleUrls: ['./patner-details.component.css']
})
export class PatnerDetailsComponent implements OnInit {
  @Input() index:any;
  service1: any;
  loading: any=false;
  data: any=null;
  constructor(private store:Store,private service:PatnersService) { }

  ngOnInit() {
    // this.store.dispatch(GetPatnerDetailsInitialValue())
    this.service.partner_id.subscribe((data)=>{
      if(data){
        //console.log(data)
        var url=Constants.GetpatnerDetails+data
        this.store.dispatch(GetPatnerDetails({url:url}))
      }
    })
    this.service1 = this.store.select(getPatnersdetailsState).subscribe((data:any)=>{
      this.loading = data.loading
      //console.log(data)
      if(data?.result){
        if(data?.result?.hasError){
          this.data = null
        }
        else{
          this.data = data?.result?.results
        }
      }
    })
  }
  ngOnDestroy(){
    // this.store.dispatch(GetPatnerDetailsInitialValue())
    this.service1.unsubscribe()
  }

}
