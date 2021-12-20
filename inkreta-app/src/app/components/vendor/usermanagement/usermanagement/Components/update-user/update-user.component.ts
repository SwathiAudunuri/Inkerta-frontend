import { Component, Input, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  // providers: [NgbAlertConfig]
})
export class UpdateUserComponent implements OnInit {
  @Input() rowindex:any
  @Input() ELEMENT_DATA:any;
  Fullname:string="";
  email:string="";
  phoneno:string="";
  role:any=null;
  audit:any="logins";
  imgurl:any;
  constructor() { }
  public vendors:any="";
  ngOnInit() {
    
  }
  ngDoCheck(){
    if(this.rowindex !== undefined){
      this.Fullname = this.ELEMENT_DATA[this.rowindex].firstname+" "+this.ELEMENT_DATA[this.rowindex].lastname
      this.email = this.ELEMENT_DATA[this.rowindex].email
      this.phoneno = this.ELEMENT_DATA[this.rowindex].phoneno
      this.role = this.ELEMENT_DATA[this.rowindex].role
      this.imgurl = this.ELEMENT_DATA[this.rowindex].image
      console.log(this.imgurl)
    }
  }
 
}
