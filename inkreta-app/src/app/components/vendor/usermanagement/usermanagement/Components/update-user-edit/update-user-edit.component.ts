import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-user-edit',
  templateUrl: './update-user-edit.component.html',
  styleUrls: ['./update-user-edit.component.css']
})
export class UpdateUserEditComponent implements OnInit {
  @Output() public childEvent = new EventEmitter()
  @Output() public childEvent1 = new EventEmitter()
  @Output() public childEvent2 = new EventEmitter()
  @Output() public childEvent3 = new EventEmitter()
  @Input() public ELEMENT_DATA:any;
  @Input() public rowindex:any;
  @Input() public updaterow:any;
  @Input() public imgediturl:any;
  durationInSeconds = 5;
  SlNo: any;
  status: any;
  Fullname:any;
  
  id: any;
  closeResult: string="";
  changed: boolean =false;
  // private _snackBar: MatSnackBar,
  constructor(public _myFb:FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.Fullname=this.updaterow.value.firstname +" "+ this.updaterow.value.lastname
    // console.log(this.rowindex)
    // this.id=this.rowindex
    if(this.rowindex !== undefined){
      this.status = this.ELEMENT_DATA[this.rowindex].Status
      this.SlNo = this.ELEMENT_DATA[this.rowindex].SlNo
      this.id=this.ELEMENT_DATA[this.rowindex].SlNo
      console.log(this.updaterow.value.image)
      if(this.imgediturl===null  || this.updaterow.value.image === ''){
        this.imgediturl=this.ELEMENT_DATA[this.rowindex].image
      }
      // console.log(this.imgediturl)
    }
  
  }
  // public updaterow=this._myFb.group({
  //   firstname:[''],
  //   lastname:[''],
  //   mobileno:[''],
  //   email:[''],
  //   role:[[]],
  //   status:[''],
  //   image:['']
  // })
  back_icon(){
    // this.childEvent1.emit(null)
    this.childEvent.emit(false)
  }
  delete_row(){
    this.ELEMENT_DATA.splice(this.rowindex,1)
    // ELEMENT_DATA.splice(index,1);
    this.childEvent1.emit(this.ELEMENT_DATA)
    this.childEvent2.emit(false)
    this.childEvent3.emit(false)
  }
  submit_updatedata(){
    this.ELEMENT_DATA[this.rowindex]={SlNo: this.SlNo,firstname:this.updaterow.value.firstname, lastname: this.updaterow.value.lastname, Date: this.ELEMENT_DATA[this.rowindex].Date, Status: this.updaterow.value.status,email:this.updaterow.value.email,phoneno:this.updaterow.value.mobileno,role:this.ELEMENT_DATA[this.rowindex].role,image:this.imgediturl}
    this.childEvent1.emit(this.ELEMENT_DATA)
  }
  // openSnackBar() {
  //   this._snackBar.openFromComponent(PizzaPartyComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }
  profile_img(event:any){
    console.log(event)
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.imgediturl = event.target.result
        this.changed = true
        this.ELEMENT_DATA[this.rowindex]={SlNo: this.SlNo,firstname:this.ELEMENT_DATA[this.rowindex].firstname, lastname: this.ELEMENT_DATA[this.rowindex].lastname, Date: this.ELEMENT_DATA[this.rowindex].Date, Status: this.ELEMENT_DATA[this.rowindex].Status,email:this.ELEMENT_DATA[this.rowindex].email,phoneno:this.ELEMENT_DATA[this.rowindex].mobileno,role:this.ELEMENT_DATA[this.rowindex].role,image:event.target.result}
        this.childEvent1.emit(this.ELEMENT_DATA)
        // this.updaterow.patchValue({
        //   image:event.target.result
        // })
        
      }
    }
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
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
}
// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: `<span class="example-pizza-party">
//   User data has been saved Sucessfully !!!
//   </span>`,
//   styles: [`
//     .example-pizza-party {
//       color: #1a8fcd;
//     }
//   `],
// })
// export class PizzaPartyComponent {}
