import { RecipientFtpMapping, RecipientGstinMapping } from "../../communication-mapping/communication";

export interface Communication {
    
    deliveryMode: string;
    description: string;
    isActive?: boolean;
    recipientActivities: any[];
    recipientEmailMappings: any[];
    recipientFtpMappings: RecipientFtpMapping[];
    recipientGstinMappings: RecipientGstinMapping[];
    recipientId: string;
    recipientTag: string;
    recipientWebserviceMappings: any[];
    deliveryMechanism: string;
    address1: string;
    address2: string;
    pincode?: number;
    state: string;
  }