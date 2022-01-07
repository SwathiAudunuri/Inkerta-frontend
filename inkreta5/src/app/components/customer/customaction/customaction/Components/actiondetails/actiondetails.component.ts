import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { getActiondetail } from '../../../Actions/actiondetail.action';
import { getcustomercustomactiondetails } from '../../../Selectors/customaction.selector';
import { CustomactionService } from '../../customaction.service';
import * as vkbeautify from 'vkbeautify';
@Pipe({
  name: 'xml'
  })
  export class XmlPipe implements PipeTransform {
    transform(value: string): any {
        if (value)
            return vkbeautify.xml(value);
        }
    }
@Component({
  selector: 'app-actiondetails',
  templateUrl: './actiondetails.component.html',
  styleUrls: ['./actiondetails.component.css']
})
export class ActiondetailsComponent implements OnInit {
  forrole: any="";
  invstatus: any="";

  constructor(private actionservice:CustomactionService,private store:Store) { }
  loaddetail= new BehaviorSubject<boolean>(false)

  @Input() edit:any;
  @Input() newaction:any
  service1:any
  actiondetail:any
  inputrequest:any
  ngOnInit(): void {
 
    this.getAllrec()
  }
  getAllrec(){

      this.service1 = this.store.select(getcustomercustomactiondetails).subscribe((data)=>{
        if(data.result){
          this.actiondetail=data.result
          if(this.actiondetail.hasError===false){
            this.forrole =""
            this.invstatus =""
            this.actiondetail=this.actiondetail.results
            var inputrequest=vkbeautify.xml(this.actiondetail?.customActions?.inputRequest)
            this.inputrequest=inputrequest
            //console.warn(this.inputrequest)
            // var string = ""
            for(var i=0;i<this.actiondetail.customActionsByPartnerRole.length;i++){
              this.forrole = this.forrole +","+ this.actiondetail?.customActionsByPartnerRole[i]?.roleName
            }
            for(var i=0;i<this.actiondetail.customActionsByInvoiceStatus.length;i++){
              this.invstatus = this.invstatus +","+ this.actiondetail?.customActionsByInvoiceStatus[i]?.invoiceStatus
            }
          }
        }
      })
      
  }
  sharedloadHandle(event:any){
    //console.log("in handle")
 
  }
  ngOnDestroy() {
    this.service1.unsubscribe()
  }
}
