import { createFeatureSelector, createSelector } from "@ngrx/store";
const login = createFeatureSelector<any>('loginReducer');
export const loginState = createSelector(login,(state)=>{
    return state;
})

const _receivablesinvoicelistState =createFeatureSelector<any>('receivablesinvoicelist');

export const getinvoicelist = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.invoicelist;
})

export const getpaidinvoicelist = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.vendorpaidinv;
})

export const QueriesState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.vendorQueries;
})

export const getvenderpdfinvoice = createSelector(_receivablesinvoicelistState , (state)=>{
    return state.vendorinvoicepdf;
})

export const getAttachmentsinvoicelist = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.vendorAttachments;
})

export const getsupportAttachmentsinvoicelist = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.vendorAttachmentsSupporting;
})

export const getQrinvoicelist = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.vendorqrcode;
})

export const getinvoicelistdetails = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.invoicedetails;
})

export const postinvoicedoc = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.uploadinvoice;
})
export const getComments = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.vendorcomments;
})

export const postexternalinvoiceState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.uploadexternalinvoice;
})

export const externalinvoicedeatilsState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.externalinvoicedetails;
})

export const getpatnerState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.patnerdetails;
})

export const vensendreminderState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.vensendreminder;
})

export const updatestatusState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.updatestatus;
})

export const postupdatestatusState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.postupdatestatus;
})

export const HistoryState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.invoicelisthistory;
})

export const paidrecordsState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.paidrecords;
})

export const templatenamessState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.templatenames;
})

export const templatedetailssState = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.templatedetails;
})

export const getvendorquerylist = createSelector(_receivablesinvoicelistState,(state)=>{
    return state.querylist;
})
// const getinvoiceState =createFeatureSelector<any>('invoicelist');
// export const getinvoicelist = createSelector(getinvoiceState,(state)=>{
//     return state;
// })

// const getpaidinvoiceState =createFeatureSelector<any>('vendorpaidinv');
// export const getpaidinvoicelist = createSelector(getpaidinvoiceState,(state)=>{
//     return state;
// })

// const Queries =createFeatureSelector<any>('vendorQueries');
// export const QueriesState = createSelector(Queries,(state)=>{
//     return state;
// })
// const getvenderpdf = createFeatureSelector<any>('vendorinvoicepdf');
// export const getvenderpdfinvoice = createSelector(getvenderpdf , (state)=>{
//     return state;
// })

// const getAttachments = createFeatureSelector<any>('vendorAttachmentsSupporting');
// export const getsupportAttachmentsinvoicelist = createSelector(getAttachments,(state)=>{
//     return state;
// })

// const getQrState =createFeatureSelector<any>('vendorqrcode');
// export const getQrinvoicelist = createSelector(getQrState,(state)=>{
//     return state;
// })

// const getinvoicedeatilsState =createFeatureSelector<any>('invoicedetails');
// export const getinvoicelistdetails = createSelector(getinvoicedeatilsState,(state)=>{
//     return state;
// })

// const _postinvoicedoc =createFeatureSelector<any>('uploadinvoice');
// export const postinvoicedoc = createSelector(_postinvoicedoc,(state)=>{
//     return state;
// })
// const _getComments = createFeatureSelector<any>('vendorcomments');
// export const getComments = createSelector(_getComments,(state)=>{
//     return state;
// })

// const _postexternalinvoice = createFeatureSelector<any>('uploadexternalinvoice');
// export const postexternalinvoiceState = createSelector(_postexternalinvoice,(state)=>{
//     return state;
// })

// const _getinvoicedeatilsState = createFeatureSelector<any>('externalinvoicedetails');
// export const externalinvoicedeatilsState = createSelector(_getinvoicedeatilsState,(state)=>{
//     return state;
// })

// const _getpatnerState = createFeatureSelector<any>('patnerdetails');
// export const getpatnerState = createSelector(_getpatnerState,(state)=>{
//     return state;
// })

// const _vensendreminderState = createFeatureSelector<any>('vensendreminder');
// export const vensendreminderState = createSelector(_vensendreminderState,(state)=>{
//     return state;
// })