import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  Editor, Toolbar } from "ngx-editor";
import {faReply} from '@fortawesome/free-solid-svg-icons';
import { QueryService } from '../../query.service';
import { SuccessComponent } from '../success/success.component';
import { stratify } from 'd3';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { QueryfileuploadComponent } from '../queryfileupload/queryfileupload.component';
import { QuerydocComponent } from '../querydoc/querydoc.component';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/constants/constants';


@Component({
  selector: 'app-querydialog',
  templateUrl: './querydialog.component.html',
  styleUrls: ['./querydialog.component.css']
})
export class QuerydialogComponent implements OnInit {

  constructor(private _http:HttpClient,public unpaid:UnpaidService,public dialog: MatDialog,private renderer: Renderer2,public dialogRef: MatDialogRef<QuerydialogComponent>,private queryservice:QueryService) {
    //this.ref=data.document_ref_id
    // //console.log(data)
    // this.ref=data.document_ref_id
    this.ref=this.unpaid.ref
    // //console.log(this.ref)
    this.sendref()
  }
  loading:boolean=true
  message:any
  ref:any
  loadedrespondquery=false
  fb=new FormBuilder;
  title='New query'
  htmlContent=''
  query=''
  btn_enable:any=false;
  htmlText="enter text"
  editor: Editor=new Editor();
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
  faReply:any=faReply
  emailForm:any
  id:any
  attachmentDetails:any=null
  addeddocs:any=[]
  ngOnInit(){
    this.queryservice.flag.subscribe(data=>{
      if(this.queryservice.attachmentDetails){
      this.addeddocs=this.queryservice.attachmentDetails
      }
    })

    this.emailForm = this.fb.group({
      email: [{value:'rdlabs@gmail.com',disabled:false},Validators.required],
      queryType: [{value:'',disabled:false},Validators.required],
      subject: [{value:'',disabled:false},Validators.required],
     templatetype: [{value:'',disabled:false},Validators.required],
     queryText:[{value:'Enter Description',disabled:false},Validators.required],
     
  });
   const spans = document.querySelector('.NgxEditor__MenuBar')
   const spans1 = document.querySelector('.NgxEditor')

  //  //console.log(spans)
    this.renderer.setStyle(spans,'flex-wrap','wrap')
    this.renderer.setStyle(spans1,'height','220px')


  }

//   emailForm = this.fb.group({
//     email: [{value:'rdlabs@gmail.com',disabled:false},Validators.required],
//     queryType: [{value:'',disabled:false},Validators.required],
//     subject: [{value:'',disabled:false},Validators.required],
//    templatetype: [{value:'',disabled:false},Validators.required],
//    queryText:[{value:'Enter Description',disabled:false},Validators.required],
   
// });


  editorconfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '8rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'

      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],

  };
    respond(query:any){
      this.title='Response'
      this.query=query
      //console.warn(query)
      const newobj:any={
        'email':'rdlabs@gmail.com',
        'queryType':query.queryType,
        'subject':query.subject,
        'templatetype':'',         
        'queryText': query.queryText,
      }
      // //console.log(newobj)
      this._http.get(Constants.QueryDocument + query.id).subscribe((data:any)=>{
        //console.warn(data)
        if(data.hasError===false){
          if(data.results[0].attachmentDetails[0]){
            //console.warn(data.results[0].attachmentDetails)

            this.attachmentDetails=data.results[0].attachmentDetails
            this.queryservice.getDocId(data.results[0].attachmentDetails[0].docId)
          }
          else{
            this.attachmentDetails=null
          }
          //console.warn(data.results[0].attachmentDetails)
        //  this.attachmentDetails=data.results.attachmentDetails.doc_name
        }
      })

      this.btn_enable=true
      this.emailForm.setValue(newobj)     
      this.emailForm.disable()
      this.loadedrespondquery=true
      //console.warn(query.queryText)
  }
  response(){
    this.btn_enable=false
    this.title='New query';
    this.emailForm.reset()
    this.emailForm.enable()
    this.queryservice.reply=false

  }
  close(){
    this.dialogRef.close();
    
  }
  reply(){
    this.title='Response'
    this.emailForm.enable()
    var subject
    if(this.emailForm.value.subject.slice(0,3)!=="re:"){
       subject="re:"+this.emailForm.value.subject

    }
    if(this.emailForm.value.subject.slice(0,3)==="re:"){
      subject=this.emailForm.value.subject

   }
    
    //this.emailForm.value.subject="re:"+this.emailForm.value.subject
    
    //this.emailForm.value.queryText.setValue("")
    this.emailForm.patchValue({"queryText": ""});
    this.emailForm.patchValue({"subject": subject});


    // //console.log(  this.emailForm.value.subject)
    this.btn_enable=false
    this.queryservice.reply=true
  }
  sendref(){
    this.queryservice.ref=this.ref
    return this.ref
  }
  



  onSubmit(data:any){
    
    // //console.log("in submit")
    // //console.log(data)
    // //console.log(this.emailForm.value.subject)
    // //console.log(this.query)
    this.message="Your query is successfully submitted"
    
    this.queryservice.SendResponse(this.emailForm.value,this.query)
    this.close()
    this.dialog.open(SuccessComponent);
  }
  upload(){
    this.dialog.open(QueryfileuploadComponent,{panelClass: 'custom-update-dialog-container' });
    
   
  }
  opendoc(item:any){
    this.queryservice.getDocId(item.docId)
    //console.warn("in doc")
    this.dialog.open(QuerydocComponent,{panelClass: 'custom-update-dialog-container' })

    
  }
  ngOnDestroy(){
    this.queryservice.attachmentDetails=[]
  }
}
