import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Editor, toDoc, toHTML, Toolbar } from 'ngx-editor';
import { Constants } from 'src/app/constants/constants';
import { getTemplateDetails, getTemplateDetailsnull } from '../../../Actions/GetTemplateDetails.actions';
import { getTemplateNames, getTemplateNamesnull } from '../../../Actions/GetTemplateNames.actions';
import { SendReminder } from '../../../Actions/sendreminder.actions';
import { loginState, templatedetailssState, templatenamessState } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-sendreminder',
  templateUrl: './sendreminder.component.html',
  styleUrls: ['./sendreminder.component.css']
})
export class SendreminderComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  to: any = [];
  cc:any=[]
  bcc:any=[];
  array: any=[];
  text:any;
  subject:any="";
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  editor: Editor=new Editor();
  service1: any;
  serive2: any;
  loading: any=false;
  service3: any;
  loading1: any=false;
  templatenames: any=null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private renderer: Renderer2,private unpaid:UnpaidService,public dialogRef: MatDialogRef<SendreminderComponent>,private service:UnpaidService,private store:Store) {
    console.log(data)
   }

  ngOnInit() {
    
    this.store.dispatch(getTemplateNamesnull())
    this.store.dispatch(getTemplateDetailsnull())
    this.store.dispatch(getTemplateNames({url:Constants.GetTemplatenames}))

    const spans = document.querySelector('.NgxEditor__MenuBar')
    const spans1 = document.querySelector('.NgxEditor')
 
   //  //console.log(spans)
     this.renderer.setStyle(spans,'flex-wrap','wrap')
     this.renderer.setStyle(spans1,'height','220px')
    // this.service1 = this.store.select(forwardState).subscribe((data)=>{
     this.service1 =  this.store.select(loginState).subscribe((data:any)=>{
        console.log(data)
        if(data?.user){
          this.cc.push(data?.user?.email);
      }
    })
    this.serive2 = this.store.select(templatenamessState).subscribe((data:any)=>{
      this.loading = data.loading
      // console.log(data)
      if(data?.result){
        if(data?.result?.hasError){

        }
        else{
          this.templatenames = data?.result?.results
        }
      }
    })
    this.service3 = this.store.select(templatedetailssState).subscribe((data:any)=>{
      this.loading1 = data.loading
      console.log(data)
      if(data?.result){
        if(data?.result?.hasError){

        }
        else{
          // this.templatenames = data?.result?.results
          this.subject = data?.result?.results.emailSubject
          // const text ="<h1>Ashok</h1>"
          var text = data?.result?.results.templateContent
          var jsonDoc = toDoc(text);
          this.text =toHTML(jsonDoc);
        }
      }
    })
  }
  get_details(item:any){
    if(this.data.external){
      var url=Constants.GetTemplatedetails+item.template_id+"/"+this.unpaid.ref+"/"+"external"
    }
    else{
      var url=Constants.GetTemplatedetails+item.template_id+"/"+this.unpaid.ref+"/"+"internal"
    }
    console.log(url)
    this.store.dispatch(getTemplateDetails({url:url}))
  }
  close(){
    this.dialogRef.close();
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.to.push( value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: any): void {
    const index = this.to.indexOf(fruit);

    if (index >= 0) {
      this.to.splice(index, 1);
    }
  }

  add_cc(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.cc.push( value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove_cc(fruit: any): void {
    const index = this.cc.indexOf(fruit);

    if (index >= 0) {
      this.cc.splice(index, 1);
    }
  }

  add_bcc(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.bcc.push( value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove_bcc(fruit: any): void {
    const index = this.bcc.indexOf(fruit);

    if (index >= 0) {
      this.bcc.splice(index, 1);
    }
  }
  submit(){
    // console.log(this.to.length)
    // console.log(this.cc.length)
    // if(this.to.length > 0 && this.cc.length > 0){
      this.array.push({ccAddresses:this.cc,bccAddresses:this.bcc,toAddresses:this.to,subject:this.text})
      // //console.log(this.array)
      console.log(toHTML(this.text))
      this.service.sendemail.next(this.array)
      this.service.sendrecepient.next(this.to.toString())
      // this.store.dispatch(SendReminder({url:,data:this.array}))
      this.close()
    // }
    // else{
    //   console.log("please enter required fields")
    // }
    
  }
  ngOnDestroy() {
    this.service1.unsubscribe()
    this.serive2.unsubscribe()
    this.service3.unsubscribe()
  }
}
