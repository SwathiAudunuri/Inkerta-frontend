import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
export interface PeriodicElement {
  Fullname: string;
  SlNo: number;
  Date: string;
  Status: string;
}


@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  edit: boolean=false;
  public nav=true;
  displayedColumns: string[] = ['SlNo', 'Fullname','Email', 'Date', 'Status'];
  rowdata:any=null;
  
  durationInSeconds = 5;
  rowindex: any=0;
  status:any = '';
  public delete_item=true;
  filterValue: any="";
  imgediturl:any=null;
  // imgurl: any="../../../../../assets/profile.png";
  imgurl: any="./assets/profile.png";
  sno: any;
  useridsuggested: any;
  // userid: any="hello";private _snackBar: MatSnackBar
  constructor(private modalService: NgbModal,public _myFB: FormBuilder,public _http:HttpClient) {}
  showFiller = false;
  public ELEMENT_DATA: any = [
    {SlNo: 1,fullname:'Grandhi Ashok', firstname:'Grandhi',lastname:'Ashok', Date: '12-12-2020', Status: true,email:'ashok_grandhi@tecnics.com',phoneno:'6302968919',role:['vender','Admin','Manager'],image:'./assets/profile.png'},
    {SlNo: 2,fullname:'P Chandra', firstname:'P',lastname:'Chandra', Date: '13-12-2020', Status: false,email:'Chandra@tecnics.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
    {SlNo: 3,fullname:'K Anil',firstname:'K', lastname: 'Anil', Date: '14-12-2020', Status: true,email:'Anil@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
    {SlNo: 4,fullname:'T Tarun',firstname:'T', lastname: 'Tarun', Date: '15-12-2020', Status: false,email:'Tarun@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
    {SlNo: 5,fullname:'K phani',firstname:'K', lastname: 'phani', Date: '12-12-2020', Status: true,email:'phani@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
    {SlNo: 6,fullname:'V Gopal',firstname:'V', lastname: 'Gopal', Date: '13-12-2020', Status: false,email:'Gopal@gmail.com',phoneno:'1234567890',role:['vender','Admin','Manager'],image:'./assets/profile.png'},
    {SlNo: 7,fullname:'N premSai', firstname:'N',lastname: 'premSai', Date: '14-12-2020', Status: true,email:'premSai@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
  ];
  dataSource: any =new MatTableDataSource<any>(this.ELEMENT_DATA);
  ngOnInit() {
    this.Add_user.controls['userid'].disable();
    this.update_row(this.ELEMENT_DATA[0],this.rowindex)
  }
  ngDoCheck(){
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    if(this.filterValue !== ""){
      //console.log(this.filterValue)
      this.dataSource.filter = this.filterValue.trim().toLowerCase();
    }
  }
  Add_user = this._myFB.group({
    // img:['../../../../../assets/profile-photo.jpg'],
    img:['./assets/profile-photo.jpg'],
    firstname:[''],
    lastname:[''],
    mobile_no:[''],
    email:[''],
    role:[''],
    userid:['']
  })
  public updaterow=this._myFB.group({
    firstname:[''],
    lastname:[''],
    mobileno:[''],
    email:[''],
    role:[[]],
    status:[false],
    image:['']
  })
  closeResult = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // applyFilter(event: Event) {

  //   const filterValue = (event.target as HTMLInputElement).value;
  //   //console.log(filterValue)
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  user_edit(){
    this.edit=true
  }
  submit_adduser(){
    //console.log(this.Add_user)
    const date=new Date()
    // //console.log("hello",this.Add_user.value.img)
    this.ELEMENT_DATA.push(
    {SlNo: this.ELEMENT_DATA.length+1, firstname:this.Add_user.value.firstname,lastname:this.Add_user.value.lastname, Date: date.toDateString(), Status: true,email:this.Add_user.value.email,phoneno:this.Add_user.value.mobile_no,role:[this.Add_user.value.role],image:this.Add_user.value.img},
    )
    this.Add_user.patchValue({
      img:'',
      firstname:'',
      lastname:'',
      mobile_no:'',
      email:'',
      role:''
  })
  }
  // openSnackBar() {
  //   this._snackBar.openFromComponent(PizzaPartyComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }
  sidenav(){
    this.nav=false
    this.delete_item=true
  }
  backsidenav(){
    this.nav=true
    this.delete_item=false
    this.sno=null
  }
  profile_img(event:any){
    //console.log(event)
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        //console.log(event.target.result)
        this.imgurl = event.target.result
        //console.log(this.imgurl)
        this.Add_user.patchValue({
          img:event.target.result
        })
        // //console.log(this.updaterow)
      }
      
    }
  }
  onChange(){
  
    // const url="http://183.83.219.159:7001/onboarding/check/username/"+this.Add_user.value.firstname+" "+this.Add_user.value.lastname
    const url="https://164.52.217.12:8443/onboarding/check/username/"+this.Add_user.value.firstname+"_"+this.Add_user.value.lastname
    this._http.get<any>(url)
    .subscribe(data=>{
      
      this.useridsuggested = data.results.suggesteduserName
      if(this.useridsuggested.length !== 0){
        //console.log("backend")
        this.Add_user.patchValue({
          userid:this.useridsuggested[0]
        })
      }
      else{
        //console.log("fixed")
        this.Add_user.patchValue({
          userid:this.Add_user.value.firstname+" "+this.Add_user.value.lastname
        })
      }
    })
  }
  delete_row(){
    this.ELEMENT_DATA.splice(this.rowindex,1)
    // ELEMENT_DATA.splice(index,1);
    // this.childEvent1.emit(this.ELEMENT_DATA)
    // this.childEvent2.emit(false)
    // this.childEvent3.emit(false)
  }
  update_row(value:any,index:any){
    // //console.log(index)
    this.rowdata = value
    this.rowindex = index
    // //console.log(this.rowindex)
    this.status = value.Status
    this.sno=value.SlNo
    this.updaterow.patchValue({
        firstname:value.firstname,
        lastname:value.lastname,
        email:value.email,
        mobileno:value.phoneno,
        role:value.role,
        status:value.Status,
        image:''
      })
  }
}
// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: `<span class="example-pizza-party">
//   User has created !!!
//   </span>`,
//   styles: [`
//     .example-pizza-party {
//       color: #1a8fcd;
//     }
//   `],
// })
// export class PizzaPartyComponent {}