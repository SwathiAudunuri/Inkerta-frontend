import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { FileUploadService } from '../../../file-upload.service';
import { QueryService } from '../../query.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {




      // constructor(private fileUploadService: FileUploadService,private http:HttpClient) { }
  
      
    //   ngOnInit(): void {
    //   }
 
    // shortLink: string = "";
    // loading: boolean = false; // Flag variable
    // file:any // Variable to store file

    //   onChange(event:any) {
    //       this.file = event.target.files[0];
    //   }
    
 
    //   onUpload(e:any) {
    //     e.stopPropagation()
    //     this.loading = !this.loading;
     
    //       this.fileUploadService.upload(this.file)
        
    //   }

    displayedColumns: string[] = ["DocName","DocType","Action"];
  dataSource:any=[];
  ELEMENT_DATA:any=[]
  base64: any=[];
  type:any=null;
  duplicate: any=false;
  error: any;
  service1: any;
  dropdown: any;
  loading: any;
  support_src: any=[];
  constructor(private dialog:MatDialog,
    private service:QueryService,
    public dialogRef: MatDialogRef<FileUploadComponent>,
    //private service:OnboardService,
    private store:Store) { }

  ngOnInit() {
    this.dropdown = ["pdf","doc"]
   // this.store.dispatch(AttachmentTypeInitialValues())
  //  this.store.dispatch(AttachmentType({url:Constants.AttachmentTypes}))
 //   this.service1 = this.store.select(attachementtypeState).subscribe((data:any)=>{
    //   //console.log(data)
    //   this.loading = data.loading
    //   if(data.results){
    //     if(data.results.hasError){
    //       //console.log("error")
    //     }
    //     else{
    //       this.dropdown = data.results?.results?.documentTypes
    //     }
    //   }
    // })
    // this.service.verifydoc.subscribe((data)=>{
    //   if(data){
    //     this.ELEMENT_DATA=data
    //     this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    //   }
    // })
    // this.service.base64.subscribe(data=>{
    //   if(data){
    //     this.base64=data
    //   }
    // })
  }
  upload_support(event: any) {
    //console.log(event)
    this.support_src = []
    //console.log(event.target.files.length)
    for (var i = 0; i < event.target.files.length; i++) {
      const name = event.target.files[i].name
      const type = event.target.files[i].type
      const size = event.target.files[i].size
      if (event.target.files) {
        //console.log(type)
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[i])
        reader.onload = (event: any) => {
          if (type === "application/pdf") {
            var base64_pdf = event.target.result.split("data:application/pdf;base64,").pop()
            this.support_src.push({ doc_type: "Query", doc_name: name, doc_size: size, mime_type: type, base64: base64_pdf })
            this.dataSource = new MatTableDataSource<any>(this.support_src);
            //console.log(this.support_src)
          }
          else if (type === "application/msword") {
            var base64_csv = event.target.result.split("data:application/msword;base64,").pop()
            this.support_src.push({ doc_type: "Query", doc_name: name, doc_size: size, mime_type: type,  base64: base64_csv })
            this.dataSource = new MatTableDataSource<any>(this.support_src);

          }
        }
      }
    }
    this.service.attachmentDetails=this.support_src

    //console.log(this.support_src)
  }
  delete_row(index:any){
    this.ELEMENT_DATA.splice(index,1);
    this.base64.splice(index,1);
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    //console.log(this.ELEMENT_DATA)
    //console.log(this.base64)
  }
  close() {
    this.dialogRef.close()
    //this.dialog.closeAll()
  }
  save(){
    // this.service.verifydoc.next(this.ELEMENT_DATA)
    // this.service.base64.next(this.base64)
    this.service.getAttachment(this.support_src)
    //console.log(this.ELEMENT_DATA)

    this.close()
  }
  ngOnDestroy(){
  //  this.service1.unsubscribe()

  }
}
