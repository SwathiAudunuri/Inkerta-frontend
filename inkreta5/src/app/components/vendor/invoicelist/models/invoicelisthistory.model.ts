export interface InvoiceListHistory {
    invoiceStatusTrackerId: number,
    documentRefId: string,
    actionType: string,
    action:string,
    actionComments: string,
    actionBy: string,
    actionDate: string,
    dispatchMode: string,
    dispatchedOn: string,
    isDispatched: string,
    source: string
}
  