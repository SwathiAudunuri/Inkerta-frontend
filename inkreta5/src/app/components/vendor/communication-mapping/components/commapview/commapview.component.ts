import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
// import { RecService } from '../../../recipientmapping/rec.service';
import { RecService } from '../../communication.service';
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
  selector: 'app-commapview',
  templateUrl: './commapview.component.html',
  styleUrls: ['./commapview.component.css']
})
export class CommapviewComponent implements OnInit {


  @Input() dumy1:any;
  @Input() viewdetails:any;
  // getemail= true;
  getemail:boolean = true;
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
  isActive: any=""
  recipientActivities: any;
  recipientEmailMappings: any;
  recipientGstinMappings : any;
  recipientWebserviceMappings : any;
  recipientTag:any = ''
  deliveryMechanism:any =''
  pincode:any=''
  state:any=''
  address1:any=''
  address2:any=''
  data1:any=null;
  test:any;
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
//   ngAfterViewInit()
// {
//   if(this.viewdetails==null){
//     //console.log(this.viewdetails)
//     // //console.log(this.viewdetails.deliveryMode)
//   }
// }
  ngDoCheck()
  {
    this.data1 = this.viewdetails
    // //console.log(this.data1)
    // this.deliveryMode = this.data1.deliveryMode
    // if(this.viewdetails!==null){
    //  this.data1=  this.viewdetails
    //  this.test = this.data1
    //   //console.log(this.test)
      // //console.log(this.viewdetails)
      // //console.log(this.viewdetails.deliveryMode)
      // //console.log(this.viewdetails.recipientEmailMappings)
      // //console.log(this.viewdetails.recipientEmailMappings.emailAddress)
      // this.recipientTag =this.viewdetails.recipientTag
      // this.description=this.viewdetails.description
      if(this.data1 ){
        this.recipientTag =this.data1.recipientTag
      this.isActive = this.data1.isActive
      this.deliveryMode = this.data1.deliveryMode
      this.description=this.data1.description
      this.recipientGstinMappings = this.data1.recipientGstinMappings
     }
      // this.deliveryMode = this.viewdetails.deliveryMode
      // this.deliveryMechanism = this.viewdetails.deliveryMechanism
      // this.pincode = this.viewdetails.pincode
      // this.state = this.viewdetails.state
      // this.address1 = this.viewdetails.address1
      // this.address2 = this.viewdetails.address2
      // this.emailAddress = this.viewdetails.emailAddress
      // this.url = this.viewdetails.url
      // this.userName = this.viewdetails.userName
      // this.password = this.viewdetails.password
      // this.recipientGstinMappings = this.viewdetails.recipientGstinMappings
      // this.recipientEmailMappings = this.viewdetails.recipientEmailMappings
      // this.recipientWebserviceMappings = this.viewdetails.recipientWebserviceMappings
      // this.title = this.viewdetails.title
      // this.assignedTo = this.viewdetails.assignedTo
      // this.priority = this.viewdetails.priority
      // this.dueDate = this.viewdetails.dueDate
    // }
  }
  ngOnInit(): void {
    // this.getcurrentrec();
    this.data1 = this.viewdetails
    
  }

  update() {
    //console.log("clickedonicon")
    let id
    this._activateroute.paramMap.subscribe((params: ParamMap) => {
      id = params.get('id');
      //console.log(id)
    }
    )
    // this._router.navigate(['/app/vendor_manager/recupdateform/', id])
  }

  // getcurrentrec() {
  //   let id
  //   this._activateroute.paramMap.subscribe((params: ParamMap) => {
  //     id = params.get('id');
  //     //console.log(id)
  //   }
  //   )

  //   this.rec.getCurrentData(id).subscribe(res => {
  //     //console.log(res)
  //     this.data = res
  //     this.data = this.data.results
  //     // //console.log(this.data);
  //     // //console.log(this.data.recipientTag)
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
  //     //console.log(this.myArr);

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
    // //console.log(this._activateroute.snapshot.params.recipientId)
    // this.rec.getCurrentData(this._activateroute.snapshot.params.recipientId).subscribe(res=>{
    //   //console.log(res)
    // })
  // }
  goback(){
    //console.log("clicked on cancel")
    this._router.navigate(['/app/vendor_manager/mappings/recipient_mapping']);
  }
  // submit() {
  //   //console.log(this.updatereceipentForm.value)
  // }
}
