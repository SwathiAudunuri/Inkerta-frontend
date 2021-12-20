
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecService } from '../rec.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
export interface reciObj {
  address1: string,
  address2: string,
  deliveryMechanism: string,
  deliveryMode: string,
  description: string,
  isActive: string,
  recipientEmailMappings: [],
  recipientGstinMappings: [],
  recipientFtpMappings: [],
  recipientId: string,
  recipientTag: string,
  recipientWebserviceMappings: [],
  pincode: string,
  state: string
}
@Component({
  selector: 'app-recviewform',
  templateUrl: './recviewform.component.html',
  styleUrls: ['./recviewform.component.css']
})
export class RecviewformComponent implements OnInit {
  //   BASE_URL  = "http://172.16.6.25:8080/eInvoiceServices/api/"
  //   REC = this.BASE_URL+"recipientMapping"
  @Input() viewdetails:any;
  constructor(private _formbuilder: FormBuilder, private _http: HttpClient,
    private rec: RecService, private _activateroute: ActivatedRoute, private _router: Router) { }
 
  updatereceipentForm !: FormGroup
  email!: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  userName: any;
  password: any;
  ftpLocation: any;
  ftpServer: any;
  emailAddress: any;
  url: any;
  selectedValue: string = '';
  selectValuess: string = '';
  fb = new FormBuilder;
  data: any
  deliveryMode: string = ''
  description: string = ''
  isActive?: boolean
  recipientActivities: any;
  recipientEmailMappings: any;
  recipientTag:any = ''
  deliveryMechanism:any =''
  pincode:any=''
  state:any=''
  address1:any=''
  address2:any=''
  // recipientFtpMappings: RecipientFtpMapping[];
  // recipientGstinMappings: RecipientGstinMapping[];

  myArr = {
    address1: null,
    address2: null,
    deliveryMechanism: null,
    deliveryMode: null,
    description: null,
    isActive: null,
    recipientEmailMappings: [
      {
        emailAddress: null
      }
    ],
    recipientGstinMappings: '',
    recipientFtpMappings: [{
      ftpServer: null,
      ftpLocation: null,
      userName: null,
      password: null
    }],
    recipientId: null,
    recipientTag: null,
    recipientWebserviceMappings: [
      {
        url: null,
        userName: null,
        password: null
      }
    ],
    pincode: null,
    state: null
  }
  ngDoCheck(){
    if(this.viewdetails!==null){
      console.log(this.viewdetails)
      this.recipientTag =this.viewdetails.recipientTag
      this.description=this.viewdetails.description
      this.isActive = this.viewdetails.isActive
      this.deliveryMode = this.viewdetails.deliveryMode
      this.deliveryMechanism = this.viewdetails.deliveryMechanism
      this.pincode = this.viewdetails.pincode
      this.state = this.viewdetails.state
      this.address1 = this.viewdetails.address1
      this.address2 = this.viewdetails.address2
      // this.title = this.viewdetails.title
      // this.assignedTo = this.viewdetails.assignedTo
      // this.priority = this.viewdetails.priority
      // this.dueDate = this.viewdetails.dueDate
    }
  }
  ngOnInit(): void {
    // this.getcurrentrec();
  }
  update() {
    console.log("clickedonicon")
    let id
    this._activateroute.paramMap.subscribe((params: ParamMap) => {
      id = params.get('id');
      console.log(id)
    }
    )
    this._router.navigate(['/app/vendor_manager/recupdateform/', id])
  }

  // getcurrentrec() {
  //   let id
  //   this._activateroute.paramMap.subscribe((params: ParamMap) => {
  //     id = params.get('id');
  //     console.log(id)
  //   }
  //   )

  //   this.rec.getCurrentData(id).subscribe(res => {
  //     console.log(res)
  //     this.data = res
  //     this.data = this.data.results
  //     // console.log(this.data);
  //     // console.log(this.data.recipientTag)
  //     this.myArr.recipientTag = this.data.recipientTag
  //     this.myArr.deliveryMechanism = this.data.deliveryMechanism
  //     this.myArr.pincode = this.data.pincode
  //     this.myArr.state = this.data.state
  //     this.myArr.address1 = this.data.address1
  //     this.myArr.address2 = this.data.address2
  //     this.myArr.description = this.data.description
  //     this.myArr.deliveryMode = this.data.deliveryMode
  //     this.myArr.isActive = this.data.isActive
  //     if (this.data.recipientEmailMappings.length > 0) {
  //       this.myArr.recipientEmailMappings[0].emailAddress = this.data.recipientEmailMappings[0].emailAddress
  //     }
  //     if (this.data.recipientFtpMappings.length > 0) {
  //       this.myArr.recipientFtpMappings[0].ftpLocation = this.data.recipientFtpMappings[0].ftpLocation
  //       this.myArr.recipientFtpMappings[0].ftpServer = this.data.recipientFtpMappings[0].ftpServer
  //       this.myArr.recipientFtpMappings[0].password = this.data.recipientFtpMappings[0].password
  //       this.myArr.recipientFtpMappings[0].userName = this.data.recipientFtpMappings[0].userName
  //     }
  //     if (this.data.recipientWebserviceMappings.length > 0) {
  //       this.myArr.recipientWebserviceMappings[0].url = this.data.recipientWebserviceMappings[0].url
  //       this.myArr.recipientWebserviceMappings[0].password = this.data.recipientWebserviceMappings[0].password
  //       this.myArr.recipientWebserviceMappings[0].userName = this.data.recipientWebserviceMappings[0].userName

  //     }

  //     for (let i = 0; i < this.data.recipientGstinMappings.length; i++) {
  //       this.myArr.recipientGstinMappings = this.myArr.recipientGstinMappings + this.data.recipientGstinMappings[i].gstin + ", ";

  //     }
  //     console.log(this.myArr);

      // this.updatereceipentForm = this.fb.group({
      //   recipientTag: [this.data.recipientTag],
      //   deliveryMode: [this.data.deliveryMode],
      //   description: [this.data.description],
      //   deliveryMechanism: [this.data.deliveryMechanism],
      //   address1: [this.data.address1],
      //   address2: [this.data.address2],
      //   pincode: [this.data.pincode],
      //   state: [this.data.state],
      //   isActive: [this.data.isActive],
      //   recipientGstinMappings: [this.data.RecipientGstinMapping],
      //   recipientFtpMappings: this._formbuilder.array([
      //     this.ftp = this._formbuilder.group({
      //       ftpLocation: [this.data.ftpLocation],
      //       ftpServer: [this.data.ftpServer],

      //       password: [this.data.password],
      //       userName: [this.data.userName]
      //     })
      //   ]),
      //   recipientEmailMappings: this._formbuilder.array([
      //     this.email = this._formbuilder.group({
      //       emailAddress: [this.data.emailAddress],
      //       //  recipientId:[this.recipientId]
      //     })
      //   ])
      // })
      // this._router.navigate(['/app/partner_manager/recupdateform/',id])
    // })
    // console.log(this._activateroute.snapshot.params.recipientId)
    // this.rec.getCurrentData(this._activateroute.snapshot.params.recipientId).subscribe(res=>{
    //   console.log(res)
    // })
  // }
  goback(){
    console.log("clicked on cancel")
    this._router.navigate(['/app/vendor_manager/mappings/recipient_mapping']);
  }
  // submit() {
  //   console.log(this.updatereceipentForm.value)
  // }
}