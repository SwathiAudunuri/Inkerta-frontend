import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VendorserviceService } from '../../vendorservice.service';
import { VendorselectiondialogComponent } from '../vendorselectiondialog/vendorselectiondialog.component';

@Component({
  selector: 'app-vendormappingedit',
  templateUrl: './vendormappingedit.component.html',
  styleUrls: ['./vendormappingedit.component.css']
})
export class VendormappingeditComponent implements OnInit {
  @Output() public childEvent = new EventEmitter()
  @Output() public childEvent1 = new EventEmitter()
  @Input() public updaterow:any;
  @Input() public rowindex:any;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private http: VendorserviceService) { }
mappingId:string=''
  ngOnInit(): void {
  }
  back_icon(){
    // this.childEvent1.emit(null)
    this.childEvent.emit(false)
  }
  PartnerCode: string = "";
  companyName: string = '';
  openDialog() {
    const dialogRef = this.dialog.open(VendorselectiondialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.PartnerCode = result.PartnerCode;
      this.companyName = result.CompanyName;

    });
  }
  submitDetails(){
    if (this.updaterow.valid) {
      this.mappingId=this.rowindex
      // this.updaterow.value.comments=this.comments
      console.log(this.updaterow)
      // this.todo.updateTodo(this.updaterow.value, this.taskRefId)
    }
  }
}
