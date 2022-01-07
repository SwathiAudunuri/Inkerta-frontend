import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['../profilemanagement.component.css']
})
export class InfoComponent implements OnInit {
  @Input() public edit_btn:any;
  constructor() { }

  ngOnInit(): void {
  }
  public object:any={
    "errors": null,
    "hasError": false,
    "results": {
        "tradeName": "",
        "ctjCd": null,
        "gstin": "20AABCU9603R1Z1",
        "cxdt": "",
        "registrationDate": "07/07/2017",
        "ctj": "",
        "companyName": "UJJIVAN SMALL FINANCE BANK LIMITED",
        "status": "",
        "lastUpdateOn": null,
        "dty": "",
        "stj": "",
        "stjCd": "",
        "frequencyType": "",
        "ctb": "",
        "statecode": null,
        "location": "Town Jamashedpur, East Singhbhum",
        "blockName": "Sakchi-3327",
        "district": "",
        "buildingNumber": "No.96, GF1 and GF2, OM Plaza",
        "pincode": 831001,
        "lg": null,
        "lt": null,
        "street": "Thakurbari Road, P.O. and P.S. Sakchi",
        "city": "",
        "floorNumber": "Ground Floor",
        "captcha": null,
        "gstSuccessMessage": "GST Number Already Verified Successfully. Please click on Next to Proceed.",
        "firmType": null,
        "address": null,
        "firstName": "Ashok",
        "lastName": "Grandhi",
        "email": "ashokgrandhi4052@gmail.com",
        "mobileNumber": "1",
        "canEnableContactNext": true,
        "verifiedMail": true,
        "verifiedPhone": false,
        "incorporationYear": "08/07/2017",
        "annualTurnover": null,
        "companySize": "<50cr",
        "companyDetail": null,
        "keyProductCategories": null,
        "industriesServiced": null,
        "industriesServicedAddmore": null,
        "standardPaymentTerms": null,
        "reportingCurrency": null,
        "companyWebsite": null,
        "msmeRegistered": null,
        "msmeCategories": null,
        "averageDailyInvoices": null,
        "salesEnquiryEmailId": null,
        "becomeInkreta": false,
        "canEnableAdditionalDetailsNext": false,
        "gstCertificate": "",
        "gstCertificateName": "",
        "gstinCertificateMimeType": null,
        "isValidWebsite": false,
        "validPurchaseemail": false,
        "lineOfBusiness": null,
        "natureOfBusiness": [
            "Supplier of Services",
            "Office / Sale Office",
            "Recipient of Goods or Services",
            "Retail Business",
            "Others",
            "Leasing Business"
        ],
        "timestamp": "06-08-2021 07:50:50"
    },
    "timestamp": "06-08-2021 07:50:50"
  }

}
