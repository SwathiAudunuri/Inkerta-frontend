import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { GetUserDetailsState } from '../../../Selectors/usermanagement.selectors';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-update-user-edit',
  templateUrl: './update-user-edit.component.html',
  styleUrls: ['./update-user-edit.component.css']
})
export class UpdateUserEditComponent implements OnInit {
  @Output() public childEvent = new EventEmitter()
  @Output() public childEvent2 = new EventEmitter()
  @Output() public childEvent3 = new EventEmitter()
  // @Input() public updaterow:any;
  public imgediturl:any ="./assets/avatar.jpg";
  durationInSeconds = 5;
  SlNo: any;
  status: any;
  Fullname:any;
  
  id: any;
  closeResult: string="";
  changed: boolean =false;
  service1: any;
  constructor(public _myFb:FormBuilder,private modalService: NgbModal,private dialog:MatDialog,private store:Store) { }
  public updaterow=this._myFb.group({
    firstname:[''],
    lastname:[''],
    mobileno:[''],
    email:[''],
    role:[''],
    status:[false],
    image:['./assets/avatar.jpg']
  })
  ngOnInit() {
    this.service1 = this.store.select(GetUserDetailsState).subscribe((data:any)=>{
      // this.loading=data.loading
      if(data.details){
        if(data.details.hasError){
          // this.error = data.details.hasError.errors.errorMessage
        }
        else{
          if(data.details.results.userdetails){
            this.updaterow.patchValue({
              firstname:data.details.results.userdetails.first_name,
              lastname:data.details.results.userdetails.last_name,
              mobileno:[''],
              email:data.details.results.userdetails.email,
              role:data.details.results.userdetails.roles,
            })
          }
        }
      }
    })
  }

  back_icon(){
    // this.childEvent1.emit(null)
    this.childEvent.emit(false)
  }
  delete_row(){
    // this.ELEMENT_DATA.splice(this.rowindex,1)
    this.childEvent2.emit(true)
    this.childEvent3.emit(false)
  }
  submit_updatedata(){
    
  }
  profile_img(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.imgediturl = event.target.result
        this.changed = true
        // this.ELEMENT_DATA[this.rowindex]={SlNo: this.SlNo,firstname:this.ELEMENT_DATA[this.rowindex].firstname, lastname: this.ELEMENT_DATA[this.rowindex].lastname, Date: this.ELEMENT_DATA[this.rowindex].Date, Status: this.ELEMENT_DATA[this.rowindex].Status,email:this.ELEMENT_DATA[this.rowindex].email,phoneno:this.ELEMENT_DATA[this.rowindex].mobileno,role:this.ELEMENT_DATA[this.rowindex].role,image:event.target.result}
      }
    }
  }
  open_resetpassword() {
    const dialogRef = this.dialog.open(ResetPasswordComponent, { panelClass: 'custom-dialog-container',disableClose: true });
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
  ngOnDestroy(){
    this.service1.unsubscribe()
  }
}

