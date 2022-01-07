import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { AttachmentType, AttachmentTypeInitialValues } from '../../Actions/AttachmentsType.actions';
import { OnboardService } from '../../Onboard.service';
import { attachementtypeState } from '../../Selectors/OnboardSelector.selector';


@Component({
  selector: 'app-verifydocuments',
  templateUrl: './verifydocuments.component.html',
  styleUrls: ['./verifydocuments.component.css']
})
export class VerifydocumentsComponent implements OnInit {
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
  constructor(private dialog:MatDialog,private service:OnboardService,private store:Store) { }

  ngOnInit() {
    this.store.dispatch(AttachmentTypeInitialValues())
    this.store.dispatch(AttachmentType({url:Constants.AttachmentTypes}))
    this.service1 = this.store.select(attachementtypeState).subscribe((data:any)=>{
      //console.log(data)
      this.loading = data.loading
      if(data.results){
        if(data.results.hasError){
          //console.log("error")
        }
        else{
          this.dropdown = data.results?.results?.documentTypes
        }
      }
    })
    this.service.verifydoc.subscribe((data)=>{
      if(data){
        this.ELEMENT_DATA=data
        this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      }
    })
    this.service.base64.subscribe(data=>{
      if(data){
        this.base64=data
      }
    })
  }
  upload_support(event:any){
    //console.log(this.type)
    this.duplicate=false
    for(var k=0;k<this.ELEMENT_DATA.length;k++){
      if(this.type === this.ELEMENT_DATA[k].DocType){
        this.duplicate = true
      }
    }
    if(this.duplicate){
      this.error = this.type + " Already exist"
    }
    else{
      this.error=""
    // //console.log(event)
    // //console.log(event.target.files.length)
    for(var i=0;i<event.target.files.length;i++){
      // const type = event.target.files[i].type
      const name = event.target.files[i].name
      const size = event.target.files[i].size
      this.ELEMENT_DATA.push({DocName : name,DocType:this.type})
      //console.log(event)
      if(event.target.files){
        // //console.log(type)
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[i])
        reader.onload = (event:any)=>{
          // //console.log(event.target.result)
          var base64 = event.target.result
          // this.ELEMENT_DATA.push({DocName : "hello",DocType:"pan",base64 : event.target.result})
          var base64_pdf = event.target.result.split("data:application/pdf;base64,").pop()
          this.base64.push({doc_name : name,doc_type:this.type,base64:base64_pdf,mime_type: "application/pdf",doc_size:size})
          // if(type === "application/pdf"){
          //   var base64_pdf = event.target.result.split("data:application/pdf;base64,").pop()
          //   this.support_src.push({base64:base64_pdf,minetype:type})
          // }
          // else if(type === "application/msword"){
          //   var base64_csv = event.target.result.split("data:application/msword;base64,").pop()
          //   this.support_src.push({base64:base64_csv,minetype:type})
          // }

          // { "doc_type": "Invoice",
          // "doc_name": "invoice.pdf",
          // "doc_size": 5000,
          // "mime_type": "application/pdf",
          // "doc_id": "",
          // "folder_id": "",
          // "base64": this.pdf_src}
        }
      }
    }
    }

    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    //console.log(this.base64)
  }
  delete_row(index:any){
    this.ELEMENT_DATA.splice(index,1);
    this.base64.splice(index,1);
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    //console.log(this.ELEMENT_DATA)
    //console.log(this.base64)
  }
  close() {
    this.dialog.closeAll()
  }
  save(){
    this.service.verifydoc.next(this.ELEMENT_DATA)
    this.service.base64.next(this.base64)
    //console.log(this.ELEMENT_DATA)
    this.close()
  }
  ngOnDestroy(){
    this.service1.unsubscribe()

  }
}
