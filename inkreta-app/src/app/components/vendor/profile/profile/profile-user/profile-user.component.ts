import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any = [
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin removed',invoice:'got invoice'},
  {when:'Aug 17, 2021 11:25:25',who:'Admin',status:'User data changed',details:'role Manager added',invoice:'invoice paid'},
  {when:'Aug 17, 2021 11:25:25',who:'Admin',status:'User data changed',details:'role Manager removed',invoice:'invoice listed'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Manager removed',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'got invoice'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Manager removed',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'got invoice'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Manager removed',invoice:'got invoice'},
]


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  edit: boolean = false; 
  closeResult: string=""

  
  constructor(private _myFb : FormBuilder,public router:Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  profile = this._myFb.group({
    firstname:['Saptarshi'],
    lastname:['Chandra'],
    email:['chandra_saptarshi@tecnics.com'],
    mobile:['1234567890'],
    role:['Customer'],
    // img:['../../../../../../assets/avatar.jpg']
    img:['./assets/avatar.jpg']
  })
  edit_profile(){
    this.edit = true
  }

  save(){
    this.edit = false
    console.log(this.profile)
  }

  profile_img(event:any){
    console.log(event)
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.profile.patchValue({
          img:event.target.result
        })
      }
    }
  }
  cancel_btn(){
    this.router.navigate(['app/vendor_manager/dashboard/default'])
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

  // favoriteSeason: string;
  audit:string="logins";
  displayedColumns: string[] = ['when','details'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

}
