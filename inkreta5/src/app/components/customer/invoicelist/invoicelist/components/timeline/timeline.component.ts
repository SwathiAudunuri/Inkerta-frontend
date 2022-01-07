import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TrackerState } from '../../../Selectors/invoice.selector';
import { getTracker, TrackerInitialValues } from '../../../Actions/tracker.action';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  search: any
  faSearch: any = faSearch
  timelinedetails: any;
  status: any
  service: any;
  loading:any=false;
  mess: string="";
  constructor(private store: Store, public unpaid: UnpaidService, public dialogRef: MatDialogRef<TimelineComponent>) { }
  close() {
    this.dialogRef.close();
  }
  get_track() {
    
    this.store.dispatch(getTracker({ doc_ref_id: this.search }))
  }
  ngOnInit(): void {
    this.store.dispatch(TrackerInitialValues())
    this.service = this.store.select(TrackerState).subscribe((data: any) => {
      this.loading=data.loading
      //console.log(data.tracker)
      if(data.tracker){
        //console.log("true")
        if (data.tracker.hasError) {
          this.mess="There is no record found"
          this.status = false
          this.timelinedetails = []
        }
        else if (!data.tracker.hasError) {
          this.status = true
          this.timelinedetails = data.tracker.results
          this.mess=""
        }
      }
      else{
        this.mess="There is no record found"
        this.status = false
        this.timelinedetails = []
      }
    })
  }
  ngOnDestroy() {
    this.service.unsubscribe()
    this.store.dispatch(TrackerInitialValues())
  }

}
