import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  Editor, Toolbar } from "ngx-editor";


@Component({
  selector: 'app-querydialog',
  templateUrl: './querydialog.component.html',
  styleUrls: ['./querydialog.component.css']
})
export class QuerydialogComponent implements AfterViewInit {

  constructor(private renderer: Renderer2,public dialogRef: MatDialogRef<QuerydialogComponent>) { }
  loadedrespondquery=false
  fb=new FormBuilder;
  title='New query'
  htmlContent=''
  query=''
  btn_enable=false
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
  ngAfterViewInit(){
   const spans = document.querySelector('.NgxEditor__MenuBar')
   const spans1 = document.querySelector('.NgxEditor')

   console.log(spans)
    this.renderer.setStyle(spans,'flex-wrap','wrap')
    this.renderer.setStyle(spans1,'height','200px')


  }

  emailForm = this.fb.group({
    email: [{value:'rdlabs@gmail.com',disabled:false},Validators.required],
    querytype: [{value:'',disabled:false},Validators.required],
    subject: [{value:'',disabled:false},Validators.required],
   templatetype: [{value:'',disabled:false},Validators.required],
    description:[{value:'Enter Description',disabled:false},Validators.required],
   
});


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
      this.title='Respond query'
      this.query=query
      const newobj:any={
        'email':'rdlabs@gmail.com',
        'querytype':'',
         'subject':'',
         'templatetype':'',         
      'description':query.querydescription,
    
      }
      this.btn_enable=true
      this.emailForm.setValue(newobj)     
      this.emailForm.disable()
      this.loadedrespondquery=true
      console.warn(query.querydescription)
  }
  response(){
    this.title='Respond query'
    this.emailForm.enable()
  }
  close(){
    this.dialogRef.close();
    
  }
  new(){
    this.title='New query'
    this.emailForm.reset()
    this.emailForm.enable()
  }
//  quillConfig={
    //toolbar: '.toolbar',
  //  toolbar: {
   //   container: [
     //   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
     //   ['code-block'],
      //  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
       // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        //[{ 'direction': 'rtl' }],                         // text direction

        //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        //[{ 'font': [] }],
        //[{ 'align': [] }],

       // ['clean'],                                         // remove formatting button

//        ['link'],
        //['link', 'image', 'video']  
  //    ],
      
    //},

   
    //"emoji-toolbar": true,
    //"emoji-textarea": false,
    //"emoji-shortname": true,
    //keyboard: {
     // bindings: {
        // shiftEnter: {
        //   key: 13,
        //   shiftKey: true,
        //   handler: (range, context) => {
        //     // Handle shift+enter
        //     console.log("shift+enter")
        //   }
        // },

     // }
  //  }
 // }
}
