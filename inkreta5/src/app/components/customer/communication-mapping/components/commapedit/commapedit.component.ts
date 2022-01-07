import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter , Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { RecService } from '../../../recipientmapping/rec.service';
import { RecService } from '../../communication.service';
import { RecipientGstinMapping } from '../../../recipientmapping/receipents';
import { Store } from '@ngrx/store';
import { updateCommList } from '../../Action/Communication.action';
import { getcommunicationid } from '../../Selector/Communication.selector';
import { data } from 'src/app/components/vendor/dashboard/dashboard/components/line-chart/line-chart.component';

@Component({
  selector: 'app-commapedit',
  templateUrl: './commapedit.component.html',
  styleUrls: ['./commapedit.component.css']
})
export class CommapeditComponent implements OnInit {

  @Output() public childEvent = new EventEmitter()
  @Input() public updaterow:any;
  @Input() public rowindex:any;
  @Input() public dumyresp :any;
  data1:any=null;
  mess: any;
  connectorTag: any;
  initialgstin: any=[];
  gst: any=[];
  
  constructor(private _formbuilder: FormBuilder, private _http: HttpClient,
    private rec: RecService, private _activateroute: ActivatedRoute,private _router:Router, private store : Store) { }
    receipentupdateForm !: FormGroup
    email!: FormGroup
    ftp!: FormGroup
    webservice!: FormGroup
    userName:any;
    password:any;
    ftpLocation:any;
    ftpServer:any;
    gstinss! : FormGroup
    emailAddress:any;
    url:any;
    selectedValue: string = '';
    selectValuess: string = '';
    fb = new FormBuilder;
    data: any
    deliveryMode: string = ''
    // description: string = ''
    isActive?: boolean
    recipientActivities: any;
    recipientEmailMappings: any;
    // selectgstin:any= [];
  //   recipientFtpMappings: RecipientFtpMapping[];
  recipientGstinMappings :any =[]
  // recipientGstinMappings: RecipientGstinMapping[];
  recipientId: string = ''
  recipientTag: string = ''
  recipientWebserviceMappings: any;
  deliveryMechanism: string = ''
  address1: string = ''
  address2: string = ''
  pincode?: number
  state: string = ''
  GstinDetailsFromGetService = [];
  GstinDetails: any = [];
  toppings = new FormControl();
  // toppings = new FormControl(["27AAACL6442L1ZA","03BZNPM9430M1KL"]);
  dropdownSettings: any = {}; 
  disabled = false;
  showFilter = false
  limitSelection = false;
  selectedItems: any = [];
  public fruit: any = { description: '',address1:'',address2:''};
  maxChars =100;
   // gstins = new FormControl();
  gstinList: any = [];
  // recipientGstinMappings:any =[];

//  gstin=this._formbuilder.group({
    // gstvalue:[["ashok"]]
  // })
  toppingList=[""]

  ngDoCheck()
  {
    // //console.log(this.dumyresp)
    // if(this.dumyresp){
    //   this.mess = this.dumyresp.results.description
    //   this.receipentupdateForm.patchValue({
    //     connectorTag: this.dumyresp.results.connectorTag

    //   })
    // }
  }


  ngOnInit(): void {
    this.getGstins()
    this.receipentupdateForm = this._formbuilder.group({
      connectorTag: [' '],
      isActive: ['true '],
      invoiceuploadDeliverymode: [' '],
      invoicequeryDeliverymode: [''],
      invoicestatusupdateDeliverymode: [' '],
      autopostOnVerification: ['true'],
      description: [' '],
      outboundConnectorsItemDeliveryEmailMapping: this._formbuilder.array([
        this.email = this._formbuilder.group({
          itemType: ['InvoiceQuery'],
          emailAddress: [''],
        })
      ]),
      outboundConnectorsGSTIN: this._formbuilder.array([
        this.gstinss = this._formbuilder.group({
          gstin: [ ],
        })
      ]),
      outboundConnectorsAutopost: this._formbuilder.group(
        {
          connectorType: [''],
          userName: [''],
          userPassword: [''],
          url: [''],
          inputRequest: [''],
          respDocNumberOnsuccessful: [''],
          respMessage: [''],
          operationAction: [''],
        }),
      outboundConnectorsItemDeliveryWebserviceMapping:this._formbuilder.array([
        this.webservice = this._formbuilder.group({
          itemType: [' Invoiceupload'],
          userName: ['',],
          userPassword: [''],
          url: ['']
        })
      ]),
    })
    this.store.select(getcommunicationid).subscribe((data1:any)=>{
      this.initialgstin=[]
      this.gst=[]
      // //console.log(this.receipentupdateForm)
      
      if(data1.results){
       
       for (let i = 0; i < data1.results.outboundConnectorsGSTIN.length; i++) {
        let val =data1.results.outboundConnectorsGSTIN[i].gstin;
        
        this.initialgstin.push(val);
        this.gst.push({gstin:val})
      }
       this.toppings.setValue(this.initialgstin)
      //  //console.log(this.toppings)
      }
      this.receipentupdateForm.patchValue({
        connectorTag :data1.results.connectorTag,
        description :data1.results.description,
        // outboundConnectorsGSTIN :this.toppings.value
       })
    })
    // this.getcurrentrec();
   
  }
  gstin(value:any){
    // //console.log(value)
  }
  back_icon(){
    this.childEvent.emit(false)
  }
  get f(){
    return this.updaterow.controls
  }
  onItemSelect(item: any) {
    // //console.log('onItemSelect', item);
  }
  onSelectAll(item: any) {
    // //console.log('onSelectAll', item);
  }

  getGstins() {

    this.rec.getGstin().subscribe(res => {
      // //console.log(res);
      let myArr: any;
      myArr = res;
      myArr = myArr.results
      this.GstinDetailsFromGetService = myArr;
      this.gstinList = Object.keys(myArr);
      this.toppingList = Object.keys(myArr);
      let values = Object.values(this.gstinList);

      // //console.log(this.gstinList);
    }
    )
  }

  submit1() {
    // //console.log(this.toppings.value.length);
    
    for (let i = 0; i < this.toppings.value.length; i++) {
      let val = this.toppings.value[i];
      let obj = { gstin: val, gstinTag: this.GstinDetailsFromGetService[val] }
      this.GstinDetails.push(obj);
    }
    // //console.log( this.updaterow.value.recipientId)
    if(this.updaterow.valid){
      // //console.log(this.updaterow.value)
      this.recipientId = this.rowindex
      this.updaterow.value.recipientId=this.recipientId
      // //console.log( this.updaterow.value.recipientId)
      // //console.log(this.recipientId)
      this.updaterow.value.recipientGstinMappings=this.GstinDetails;
      // //console.log(this.updaterow.value)
    // this.rec.updateRec(this.updaterow.value.recipientId,this.updaterow.value)
    
    var communication = this.updaterow.value
    this.store.dispatch(updateCommList(communication))

    // this.rec.updateRec(this.recipientId,this.updaterow.value)  
  }
  }

  submit() {
    // //console.log(this.toppings.value.length);
    
    for (let i = 0; i < this.toppings.value.length; i++) {
      let val = this.toppings.value[i];
      let obj = { gstin: val, gstinTag: this.GstinDetailsFromGetService[val] }
      this.GstinDetails.push(obj);
    }
    // //console.log( this.updaterow.value.recipientId)
    if(this.updaterow.valid){
      // //console.log(this.updaterow.value)
      this.recipientId = this.rowindex
      this.updaterow.value.recipientId=this.recipientId
      // //console.log( this.updaterow.value.recipientId)
      // //console.log(this.recipientId)
      this.updaterow.value.recipientGstinMappings=this.GstinDetails;
      // //console.log(this.updaterow.value)
    // this.rec.updateRec(this.updaterow.value.recipientId,this.updaterow.value)
    this.rec.updateRec(this.recipientId,this.updaterow.value)  
  }
  }
}



