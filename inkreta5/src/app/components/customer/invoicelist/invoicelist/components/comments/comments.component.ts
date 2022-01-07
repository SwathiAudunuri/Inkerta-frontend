import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { addcustomercomments, customercomments } from '../../../Actions/comments.action';
import { getComments } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private unpaid:UnpaidService,private store: Store,public dialogRef: MatDialogRef<CommentsComponent>) { }
  data:any
  CommentsForm:any;
  @Input() external:any;

  ngOnInit(): void {
    
    this.CommentsForm=new FormGroup({'comments':new FormControl('Add Comment...')})
    this.getData()
  }
  getData(){
    if(this.external){
      var data =this.store.dispatch(customercomments({ url: Constants.ExternalComments+this.unpaid.ref}))
    }
    else{
      var data =this.store.dispatch(customercomments({ url: Constants.Comments+this.unpaid.ref}))
    }
  this.store.select(getComments).pipe((data:any)=>{
    ////console.warn(data.actionsObserver)
    return data.actionsObserver
  },
  (data:any)=>{
    //console.warn(data._value)
    return of(data._value)
  }
  ),
(data:any)=>{
  //console.warn(data)
  return of(data)

}
this.store.select(getComments).subscribe(data=>{
  //console.warn(data.result.res.results)

  this.data=data.result.res.results

})
  }
  close(){
    this.dialogRef.close();
    
  }
  onSubmit(){

        var data={
      "documentRefId":this.unpaid.ref,
      "comments":this.CommentsForm.value.comments
  }
  // this.store.dispatch(addcustomercomments({data:data}))
  this.close()

  //console.warn(data);

  }
  addComment(){
  //   var data={
  //     "documentRefId":this.unpaid.ref,
  //     "comments":
  // }
  // this.SignupForm.setValue({})

  }
  more(){
//  this.side.TabIndex=4
  }

}
