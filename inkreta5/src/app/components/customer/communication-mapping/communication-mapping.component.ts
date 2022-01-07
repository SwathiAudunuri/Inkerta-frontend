import { Component, forwardRef, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addCommList, getCommList } from './Action/Communication.action';
import { RecService } from './communication.service';
import { outboundSerice } from './components/outbond.service';
import { getcommunication } from './Selector/Communication.selector';
@Component({
  selector: 'app-communication-mapping',
  templateUrl: './communication-mapping.component.html',
  styleUrls: ['./communication-mapping.component.css']
})
export class CommunicationMappingComponent implements OnInit  {

 
  email !: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  activity !: FormGroup
  gstins!: FormGroup
  gstinss !: FormGroup
  submitted = false;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  selectedValue: string = '';
  selectValuess: string = '';
  dropdownSettings: any = {};
  disabled = false;
  showFilter = false
  limitSelection = false;
  selectedItems: any = [];
  recipientGstinMappings: any = []
  // gstins = new FormControl();
  gstinList: any = [];
  // gstinListss=['07AAEFE1763C1ZU','06AAVCS4878E1ZP','36AAACD7999Q1ZL','07AAACP3682N2ZZ','19AAACW2286K1ZW',
  // '27AAACL6442L1ZA','29AAACR4849R2ZG']
  // gstinList=['07AAEFE1763C1ZU','06AAVCS4878E1ZP']
  selectedGstins: any;
  data: any;
  recipientId: string = ''
  recipientss = new FormControl();
  getdiv: boolean = false;
  GstinDetailsFromGetService = [];
  GstinDetails: any = [];
  // GSTIN : any=[]
  toppings = new FormControl();
  public fruit: any = { description: '' };
  maxChars = 100;
  userName: any;
  index: any;
  sidenav: boolean = true;
  details: any = [];
  search: any;
  statusopen1: any = false
  statusopen: boolean = true
  dumy1: any
  testing: any
  // public receipentForm1:any;
connectorTag: any;
receipentForm!: FormGroup 
constructor(private _formbuilder: FormBuilder, private _service: RecService, private _router: Router
    , public dialog: MatDialog, private store: Store,public out:outboundSerice) { }


  showMe() {
    this.getdiv = !this.getdiv
  }
  ngOnInit(): void {
    this.store.dispatch(getCommList())
  
    this.store.select(getcommunication).subscribe(data => {
      this.dumy1 = data
      if (this.dumy1) {
      }
    })
    this.getGstins();
    this.getrecId();
    this.receipentForm = this._formbuilder.group({
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

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'gstin',
      textField: 'gstinTag',
      selectAllText: 'select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 5,
      allowSearchFilter: this.showFilter,
    };
  }

  closesidenav() {
    this.statusopen1 = false;
  }
  test(){
    this.out.Title = this.testing
  }


  getrecId() {
    this._service.getid().
      subscribe(response => {
        this.data = response
        this.data = this.data.results
        this.recipientId = this.data;
      })
  }
  onItemSelect(item: any) {
    // //console.log('onItemSelect', item);
  }
  onSelectAll(item: any) {
    // //console.log('onSelectAll', item);
  }

  getGstins() {

    this._service.getGstin().subscribe(res => {
      // //console.log(res);
      let myArr: any;
      myArr = res;
      myArr = myArr.results
      this.GstinDetailsFromGetService = myArr;
      this.gstinList = Object.keys(myArr);
      let values = Object.values(this.gstinList);
      // //console.log(this.gstinList);
    }
    )
  }
  get f() {
    return this.receipentForm.controls
  }

  goback() {
    // //console.log("clicked on cancel")
    // this._router.navigate(['/app/customer_manager/mappings/recipient_mapping']);
  }
  onReset() {
    this.submitted = false;
    this.receipentForm.reset();
  }


  onSubmit1() {


    this.submitted = true;
    //console.log("fndeb")
    // //console.log(this.toppings.value.length);

    for (let i = 0; i < this.toppings.value.length; i++) {
      let val = this.toppings.value[i];
      let obj = { gstin: val }
      this.GstinDetails.push(obj);
    }
    this.receipentForm.value.recipientId = this.recipientId
    this.receipentForm.value.outboundConnectorsGSTIN = this.GstinDetails;
    //console.log(this.receipentForm.value)

    var communication = this.receipentForm.value
    this.store.dispatch(addCommList(communication))
  }



  onSubmit() {
    this.submitted = true;
    //console.log("fndeb")
    // //console.log(this.toppings.value.length);

    for (let i = 0; i < this.toppings.value.length; i++) {
      let val = this.toppings.value[i];
      let obj = { gstin: val, gstinTag: this.GstinDetailsFromGetService[val] }
      this.GstinDetails.push(obj);
    }
    this.receipentForm.value.recipientId = this.recipientId
    this.receipentForm.value.recipientGstinMappings = this.GstinDetails;
    //console.log(this.receipentForm.value)
    this._service.postRec(this.receipentForm.value)
    alert("Recipient Submission success")
  }
}





