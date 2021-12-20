

	export interface RecipientFtpMapping {
		ftpLocation: string;
		ftpServer: string;
		id: number;
		password: string;
		userName: string;
	}
  
	export interface RecipientGstinMapping {
		gstin: string;
		gstinTag: string;
		id: number;
	}
  
	export interface Result {
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
  
	export interface Receipents {
		errors?: any;
		hasError: boolean;
		results: Result[];
		timestamp: string;
	}
  


