import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


export interface PeriodicElement {
  firstname: string;
  lastname: string;
  email:string;
  mobileno: string;
}

const ELEMENT_DATA: any = [
  {firstname:'Chandra',lastname:'Saptarshi',email:'chandra_saptarshi@tecnics.com',mobileno:'0981237664789'}
];
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['../profilemanagement.component.css']
})
export class ContactInfoEditComponent implements OnInit {
  @Input() public edit_btn:any;
  @Input() public Additional_Details:any;
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobileno','edit'];
  // dataSource = ELEMENT_DATA;
  public dataSource:any;
  closeResult = '';
  edit_sec: boolean =true;
  edit_index: any;
  @Input() public imgurl: any;
  ngOnInit(){}
  ngDoCheck(){
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    this.Additional_Details.patchValue({
      seoundaryContactinfo:ELEMENT_DATA,
      profile_image:this.imgurl
    })
    // //console.log(this.imgurl)
  }
  constructor(private modalService: NgbModal,private _myFB:FormBuilder) {}
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  public secoundary_Details:any = this._myFB.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    mobileno:['']
  })
  submit_secondary(){
    ELEMENT_DATA.push(this.secoundary_Details.value)
    this.secoundary_Details.patchValue({
      firstname:'',
      lastname:'',
      email:'',
      mobileno:''
    })
  }
  delete_secondary(value:any){
    ELEMENT_DATA.splice(value,1);
  }
  edit_secondary(value:any,index:any){
    // //console.log("edit",value)
    this.edit_sec = false;
    this.edit_index = index;
    this.secoundary_Details.patchValue({
      firstname:value.firstname,
      lastname:value.lastname,
      email:value.email,
      mobileno:value.mobileno
    })
  }
  submit_secondaryedit(){
    ELEMENT_DATA[this.edit_index]=this.secoundary_Details.value
    this.secoundary_Details.patchValue({
      firstname:'',
      lastname:'',
      email:'',
      mobileno:''
    })
  }
  add_details(){
    this.edit_sec = true;
  }
  open1(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason1(reason)}`;
    });
  }

  private getDismissReason1(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  profile_img(event:any){
    //console.log(event)
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.imgurl = event.target.result
      }
    }
  }
  remove_img(){
    this.imgurl = ""
  }
}
