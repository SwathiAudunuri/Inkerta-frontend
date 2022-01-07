// import { RecipientFtpMapping, RecipientGstinMapping } from "../../vendor/communication-mapping/communication";

import { RecipientFtpMapping, RecipientGstinMapping } from "./communication";

// export interface Rec {
    
//     deliveryMode: string,
//     description: string,
//     isActive?: boolean;
//     recipientActivities: any[];
//     recipientEmailMappings: any[];
//     recipientFtpMappings: RecipientFtpMapping[];
//     recipientGstinMappings: RecipientGstinMapping[];
//     recipientId: string;
//     recipientTag: string;
//     recipientWebserviceMappings: any[];
//     deliveryMechanism: string;
//     address1: string;
//     address2: string;
//     pincode?: number;
//     state: string;
//   }
   const initialState ={
    deliveryMode: null,
    description: null,
    isActive: null,
    recipientActivities: null,
    recipientEmailMappings: null,
    recipientFtpMappings: null,
    recipientGstinMappings: null,
    recipientId: null,
    recipientTag: null,
    recipientWebserviceMappings: null,
  
}