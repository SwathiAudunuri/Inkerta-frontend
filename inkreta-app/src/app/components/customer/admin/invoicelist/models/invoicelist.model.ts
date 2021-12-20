export interface InvoiceList {
    InvoiceNo: number;
    Date:string;
    VendorName: string;
    Amount: number;
    DueDate: string;
    StatusOfInv:string;
    Action:Array<any>;
  }