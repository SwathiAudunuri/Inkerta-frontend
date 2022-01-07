import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { onboardverificationService } from '../../../onboarding-verification.service';
import { GetPatnerdetailsState } from '../../../Selectors/onboarding-verification.selectors';
import { AttachmentPopupComponent } from '../attachment-popup/attachment-popup.component';

// const ELEMENT_DATA: any = [
//   {name: 'pan.pdf', type: 'PAN CARD'},
//   {name: 'driving.pdf', type: 'driving licence'},

// ];

@Component({
  selector: 'app-attachment-details',
  templateUrl: './attachment-details.component.html',
  styleUrls: ['./attachment-details.component.css']
})
export class AttachmentDetailsComponent implements OnInit {
  displayedColumns: string[] = ['Document Name', 'TYPE','createdBy'];
  dataSource: any;
  service1: any;

  constructor(private dialog:MatDialog,private store:Store,private service:onboardverificationService) { }

  ngOnInit(): void {
    this.service1 =  this.store.select(GetPatnerdetailsState).subscribe((data:any)=>{
      //console.log("details",data)
      if(data.details){
        if(data.details.hasError){
          //console.log('error')
        }
        else{
          // this.gstindetails=data.details.results
          if(data.details?.results?.attachmentDetails){
            this.dataSource =new MatTableDataSource<any>(data.details?.results?.attachmentDetails);
          }
        }
      }
    })
  }

  openAttachement(data:any){
    // ,{data:{compnay_name:item.doc_name,docId:item.docId}}
    const dialogRef = this.dialog.open(AttachmentPopupComponent);
    this.service.docId.next(data.docId)
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
}

}
