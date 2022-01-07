import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { GatProfileState } from '../../../Selectors/profilemanagement.selectors';
import { ProfileManagementService } from '../../profile-management.services';


export interface PeriodicElement {
  firstname: string;
  lastname: string;
  email: string;
  mobileno: string;
}

// const ELEMENT_DATA: any = [
//   {firstname:'Chandra',lastname:'Saptarshi',email:'chandra_saptarshi@tecnics.com',mobileno:'0981237664789'}
// ];
@Component({
  selector: 'app-profile-contact-info',
  templateUrl: './profile-contact-info.component.html',
  styleUrls: ['./profile-contact-info.component.css']
})
export class ProfileContactInfoComponent implements OnInit {
  @Input() public edit_btn: any;
  @Input() public Profile_Details: any;
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobileno', 'edit'];
  // dataSource = ELEMENT_DATA;
  public dataSource: any;
  closeResult = '';
  edit_sec: boolean = true;
  edit_index: any;
  @Input() public imgurl: any;
  service: any;
  loading: any;
  contact_info: any;
  ELEMENT_DATA: any=[];
  newdetails: any = [];
  constructor(private modalService: NgbModal, private _myFB: FormBuilder, public store: Store, public profileservice: ProfileManagementService) { }
  ngOnInit() {
    this.service = this.store.select(GatProfileState).subscribe((data) => {
      //console.log(data)
      this.loading = data.loading
      if (data.details) {
        if (data.details.hasError) {
          //console.log("error in profilemanagement")
        }
        else {
          this.contact_info = data.details.results
          if (this.contact_info.partnerContactDetails) {
            // this.ELEMENT_DATA = this.contact_info.partnerContactDetails
            
            this.contact_info = data.details.results
            for (var i = 0; i < this.contact_info.partnerContactDetails.length; i++) {
              if (this.contact_info.partnerContactDetails[i].typeOfContact !== "Primary") {
                this.ELEMENT_DATA.push(this.contact_info.partnerContactDetails[i])
              }
            }
            this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
          }
        }
      }
    })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  public secoundary_Details: any = this._myFB.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    primaryPhoneNumber: ['']
  })
  submit_secondary() {
    //console.log(this.ELEMENT_DATA)
    this.ELEMENT_DATA = Object.assign([], this.ELEMENT_DATA);
    this.ELEMENT_DATA.push(this.secoundary_Details.value)
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

    const object = {
      "firstName": this.secoundary_Details.value.firstName,
      "lastName": this.secoundary_Details.value.lastName,
      "title": "MR",
      "primaryPhoneNumber": this.secoundary_Details.value.primaryPhoneNumber,
      "secondaryPhoneNumber": "",
      "email": this.secoundary_Details.value.email,
      "typeOfContact": "Secondary"
    }
    this.newdetails.push(object)
    //console.log(this.newdetails)
    this.profileservice.newdata.next(this.newdetails)
    this.secoundary_Details.patchValue({
      firstName: '',
      lastName: '',
      email: '',
      primaryPhoneNumber: ''
    })

  }
  delete_secondary(value: any) {
    // ELEMENT_DATA.splice(value,1);
  }
  edit_secondary(value: any, index: any) {
    // //console.log("edit",value)
    this.edit_sec = false;
    this.edit_index = index;
    this.secoundary_Details.patchValue({
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      mobileno: value.mobileno
    })
  }
  submit_secondaryedit() {
    // ELEMENT_DATA[this.edit_index]=this.secoundary_Details.value
    this.secoundary_Details.patchValue({
      firstname: '',
      lastname: '',
      email: '',
      mobileno: ''
    })
  }
  add_details() {
    this.edit_sec = true;
  }
  open1(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
  profile_img(event: any) {
    //console.log(event)
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.imgurl = event.target.result
      }
    }
  }
  remove_img() {
    this.imgurl = ""
  }
}

