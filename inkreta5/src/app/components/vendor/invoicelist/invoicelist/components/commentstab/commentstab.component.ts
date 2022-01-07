import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, of } from 'rxjs';
// import { vendorcomments } from '../../../Actions/comments.action';
import { getComments } from '../../../Selectors/invoice.selector';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { FormControl, FormGroup } from '@angular/forms';
import { addvendorcomments, vendorcomments, vendorcommentsKeys, vendorcommentsnull } from '../../../Actions/comments.action';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-commentstab',
  templateUrl: './commentstab.component.html',
  styleUrls: ['./commentstab.component.css']
})
export class CommentstabComponent implements OnInit {
  keys: any=null;
  notes_id: any;

  constructor(private unpaid: UnpaidService, private store: Store) { }
  data: any
  faCaretDown:any=faCaretDown
  @Input() index: any
  @ViewChild('matMenu1Trigger') trigger:any;
  loadcomments = new BehaviorSubject<boolean>(false)
  service: any
  service1: any
  CommentsForm: any;
  loading:any=false;

  @Input() external:any
  ngOnInit(): void {
    this.store.dispatch(vendorcommentsnull())
    this.store.dispatch(vendorcommentsKeys({url:Constants.CommentsKeys}))
    this.CommentsForm = new FormGroup({ 
      'comments': new FormControl(''),
      'type':new FormControl(null)
     })

    this.service = this.unpaid.changetab.subscribe(() => {
      if (this.unpaid.tab === 4) {
        this.CommentsForm.reset()
        //console.log("1")
        if(this.external){
          this.store.dispatch(vendorcomments({ url: Constants.ExternalComments+this.unpaid.ref}))
        }
        else{
          this.store.dispatch(vendorcomments({ url: Constants.Comments+this.unpaid.ref}))
        }
        // this.store.dispatch(vendorcomments({ doc_refid: this.unpaid.ref }))
      }
    })
    this.getData()
  }
  getData() {
    this.service1 = this.unpaid.loadcomments.subscribe((data) => {
      if (this.unpaid.tab === 4) {

        if(this.external){
          this.store.dispatch(vendorcomments({ url: Constants.ExternalComments+this.unpaid.ref}))
        }
        else{
          this.store.dispatch(vendorcomments({ url: Constants.Comments+this.unpaid.ref}))
        }

        // this.loadcomments.next(true)
      }
    })
    // this.loadcomments.subscribe(() => {
      this.store.select(getComments).subscribe(data => {
        this.loading = data.loading
        //console.log(data)
        if(data?.result){
          if(data?.result?.res?.hasError){

          }
          else{
            this.data = data?.result?.res?.results
          }
        }
        if(data?.postresult){
          if(data?.postresult?.res?.hasError){

          }
          else{
            this.unpaid.loadcomments.next(true)
          }
        }
        if(data?.keys){
          // console.log(data?.keys)
          if(data?.keys?.res?.hasError){

          }
          else{
            // console.log(data?.keys?.res?.results['Notes Type'])
            // console.log("work")
            this.keys = data?.keys?.res?.results['Notes Type']
          }
        }
        // this.data=data?.postresult
        

      })

    // })



  }
  showText(item:any) {
    this.notes_id=item.notes_id    
     // this.isReadMore = !this.isReadMore
      //console.warn(this.data.notes_id)
    }
  onSubmit(event:any) {
   // event.stopPropagation();
   // event.preventDefault();
    //console.warn("in submit")
    var data = {
      "documentRefId": this.unpaid.ref,
      "notes_type":this.CommentsForm.value.type,
      "notes": this.CommentsForm.value.comments
    }

    if(this.external){
      this.store.dispatch(addvendorcomments({ url: Constants.ExternalCommentsSave, data: data}))
    }
    else{
      this.store.dispatch(addvendorcomments({ url: Constants.CommentsSave , data: data}))
    }
    // const result=this.store.dispatch(addvendorcomments({ data: data }))
    // this.close()
    this.trigger.closeMenu()
    // this.store.select(getComments).subscribe(data=>{
    //   //console.warn(data.postresult.res)
    //   if((data.postresult.res.hasError===false) && (data.postresult.res.results.successTransactionsCount===1)){
    //     this.unpaid.loadcomments.next('true')

    //   }
    // })


  }

  close(){
    this.CommentsForm.reset()

    this.trigger.closeMenu()
  }
  ngOnDestroy() {
    this.service.unsubscribe()
    this.service1.unsubscribe()
    this.CommentsForm.reset()
   this.store.dispatch(vendorcommentsnull())
    // this.service3.unsubscribe()
  }
}
