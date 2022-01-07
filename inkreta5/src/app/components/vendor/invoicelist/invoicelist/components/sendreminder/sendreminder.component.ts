import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, enableProdMode, Inject, OnInit, Renderer2} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Editor, toDoc, toHTML, Toolbar } from 'ngx-editor';
import { SnackbarComponent } from 'src/app/components/repeated/snackbar/snackbar.component';
import { SnackBarService } from 'src/app/components/repeated/snackbar/snackbar.service';
import { Constants } from 'src/app/constants/constants';
import { getTemplateDetails, getTemplateDetailsnull } from '../../../Actions/GetTemplateDetails.actions';
import { getTemplateNames, getTemplateNamesnull } from '../../../Actions/GetTemplateNames.actions';
import { SendReminder,SendRemindernull } from '../../../Actions/sendreminder.actions';
import { loginState, templatedetailssState, templatenamessState, vensendreminderState } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
// import  DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-sendreminder',
  templateUrl: './sendreminder.component.html',
  styleUrls: ['./sendreminder.component.css']
})
export class SendreminderComponent implements OnInit {

  // public Editor = DecoupledEditor;

  //   public onReady( editor:any ) {
  //       editor.ui.getEditableElement().parentElement.insertBefore(
  //           editor.ui.view.toolbar.element,
  //           editor.ui.getEditableElement()
  //       );
  //   }

  ckeditorContent:any = "hello"

  selectable = true;
  removable = true;
  addOnBlur = true;
  html = ``;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  to: any = [];
  cc:any=[]
  bcc:any=[];
  array: any;
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
  inc_attachment:boolean = false
  service4: any;
  loading2: any=false;
  durationInSeconds: number=5;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private snackservice:SnackBarService,public _snackBar:MatSnackBar,private renderer: Renderer2,private unpaid:UnpaidService,public dialogRef: MatDialogRef<SendreminderComponent>,private service:UnpaidService,private store:Store) {
    //console.log(data)
    
   }

  ngOnInit() {
    var jsonDoc = toDoc("");
    this.text =toHTML(jsonDoc);
    this.store.dispatch(getTemplateNamesnull())
    this.store.dispatch(getTemplateDetailsnull())
    this.store.dispatch(SendRemindernull())
    this.store.dispatch(getTemplateNames({url:Constants.GetTemplatenames}))

    // const spans = document.querySelector('.NgxEditor__MenuBar')
    // const spans1 = document.querySelector('.NgxEditor')
 
   //  ////console.log(spans)
    //  this.renderer.setStyle(spans,'flex-wrap','wrap')
    //  this.renderer.setStyle(spans1,'height','220px')
    // this.service1 = this.store.select(forwardState).subscribe((data)=>{
     this.service1 =  this.store.select(loginState).subscribe((data:any)=>{
        //console.log(data)
        if(data?.user){
          this.cc.push(data?.user?.email);
      }
    })
    this.serive2 = this.store.select(templatenamessState).subscribe((data:any)=>{
      this.loading = data.loading
      // //console.log(data)
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
      //console.log(data)
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
    this.service4 = this.store.select(vensendreminderState).subscribe((data:any)=>{
      this.loading2 = data.loading
      //console.log(data)
      if(data?.result){
        if(data?.result?.hasError){

        }
        else{
          this.openSnackBar(data?.result?.results)
          this.close()
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
    //console.log(url)
    this.store.dispatch(getTemplateDetails({url:url}))
  }
  openSnackBar(mess:any) {
    this.snackservice.message.next(mess)
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['blue-snackbar']
    });
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

      // this.array.push({ccAddresses:this.cc,bccAddresses:this.bcc,toAddresses:this.to,subject:this.text})
    //   //console.log(this.text)
    // var body= toHTML(this.text)
      this.array = {
        "mailBody": this.text,
        "toAddresses": this.to,
        "ccAddresses": this.cc,
        "emailSubject": this.subject,
        "document_ref_id": this.unpaid.ref,
        "includeAttachment": this.inc_attachment,
        "external": this.data.external
      }
      //console.log(this.array)
      this.service.sendemail.next(this.array)
      this.service.sendrecepient.next(this.to.toString())
      this.store.dispatch(SendReminder({url:Constants.SendReminder,data:this.array}))
      // this.close()

    
  }
  ngOnDestroy() {
    this.service1.unsubscribe()
    this.serive2.unsubscribe()
    this.service3.unsubscribe()
    this.service4.unsubscribe()
  }
}
