import { createFeatureSelector, createSelector } from "@ngrx/store";

// const getcustomerinvoiceState =createFeatureSelector<any>('customerinvoicelist');
// export const getcustomerinvoicelist = createSelector(getcustomerinvoiceState,(state)=>{
//     return state;
// })

// const getcustomerpaidinvoiceState =createFeatureSelector<any>('customerpaidinvoicelist');
// export const getcustomerpaidinvoicelist = createSelector(getcustomerpaidinvoiceState,(state)=>{
//     return state;
// })

// const getcustomerinvoicedeatilsState =createFeatureSelector<any>('customerinvoicedetails');
// export const getcustomerinvoicelistdetails = createSelector(getcustomerinvoicedeatilsState,(state)=>{
//     return state;
// })

// const getcustomerExceptionsinvoiceState =createFeatureSelector<any>('customerExceptions');
// export const getcustomerExceptionsinvoicelist = createSelector(getcustomerExceptionsinvoiceState,(state)=>{
//     return state;
// })

// const _QueriedState =createFeatureSelector<any>('Queried');
// export const QueriedState = createSelector(_QueriedState,(state)=>{
//     return state;
// })

// const getcustomerQrState =createFeatureSelector<any>('customerqrcode');
// export const getcustomerQrinvoicelist = createSelector(getcustomerQrState,(state)=>{
//     return state;
// })

// const getcustomerpdf = createFeatureSelector<any>('customerinvoicepdf');
// export const getcustomerpdfinvoice = createSelector(getcustomerpdf , (state)=>{
//     return state;
// })

// const getAttachments1 = createFeatureSelector<any>('customerAttachments');
// export const getAttachmentsinvoicelist = createSelector(getAttachments1,(state)=>{
//     return state.results;
// })

// const getAttachments = createFeatureSelector<any>('customerAttachmentsSupporting');
// export const getsupportAttachmentsinvoicelist = createSelector(getAttachments,(state)=>{
//     return state;
// })

// const getHistory = createFeatureSelector<any>('customerinvoicelisthistory');
// export const getHistoryinvoicelist = createSelector(getHistory,(state)=>{
//     return state;
// })

// const _getErp = createFeatureSelector<any>('erp');
// export const getErp = createSelector(_getErp,(state)=>{
//     return state;
// })

// const getcustomermyinboxState =createFeatureSelector<any>('myinbox');
// export const getcustomermyinbox = createSelector(getcustomermyinboxState,(state)=>{
//     return state;
// })

// const forward =createFeatureSelector<any>('forward');
// export const forwardState = createSelector(forward,(state)=>{
//     return state;
// })

// const _getComments = createFeatureSelector<any>('comments');
// export const getComments = createSelector(_getComments,(state)=>{
//     return state;
// })

// const tracker = createFeatureSelector<any>('tracker');
// export const TrackerState = createSelector(tracker,(state)=>{
//     return state;
// })

// const usersforforward = createFeatureSelector<any>('usersforforward');
// export const usersforforwardState = createSelector(usersforforward,(state)=>{
//     return state;
// })

// const login = createFeatureSelector<any>('loginReducer');
// export const loginState = createSelector(login,(state)=>{
//     return state;
// })

// const _fetchforinvoice = createFeatureSelector<any>('fetchforinvoice');
// export const fetchforinvoices= createSelector(_fetchforinvoice,(state)=>{
//     return state;
// })

// const _executeaction = createFeatureSelector<any>('executeaction');
// export const executeactionState= createSelector(_executeaction,(state)=>{
//     return state;
// })

// const _getpatnerState = createFeatureSelector<any>('custpatnerdetails');
// export const getpatnerState = createSelector(_getpatnerState,(state)=>{
//     return state;
// })

// const _postexternalinvoice = createFeatureSelector<any>('custuploadexternalinvoice');
// export const postexternalinvoiceState = createSelector(_postexternalinvoice,(state)=>{
//     return state;
// })

// const _getinvoicedeatilsState = createFeatureSelector<any>('custexternalinvoicedetails');
// export const externalinvoicedeatilsState = createSelector(_getinvoicedeatilsState,(state)=>{
//     return state;
// })

// const _sendreminderState = createFeatureSelector<any>('sendreminder');
// export const sendreminderState = createSelector(_getinvoicedeatilsState,(state)=>{
//     return state;
// })


const login = createFeatureSelector<any>('loginReducer');
export const loginState = createSelector(login,(state)=>{
    return state;
})

const _payablesinvoicelistState =createFeatureSelector<any>('payablesinvoicelist');


export const getcustomerinvoicelist = createSelector(_payablesinvoicelistState,(state)=>{
    return state.customerinvoicelist;
})

export const getcustomerpaidinvoicelist = createSelector(_payablesinvoicelistState,(state)=>{
    return state.customerpaidinvoicelist;
})

export const getcustomerinvoicelistdetails = createSelector(_payablesinvoicelistState,(state)=>{
    return state.customerinvoicedetails;
})

export const getcustomerExceptionsinvoicelist = createSelector(_payablesinvoicelistState,(state)=>{
    return state.customerExceptions;
})

export const QueriedState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.Queried;
})

export const getcustomerQrinvoicelist = createSelector(_payablesinvoicelistState,(state)=>{
    return state.customerqrcode;
})

export const getcustomerpdfinvoice = createSelector(_payablesinvoicelistState , (state)=>{
    return state.customerinvoicepdf;
})

export const getAttachmentsinvoicelist = createSelector(_payablesinvoicelistState,(state)=>{
    return state.customerAttachments;
})

export const getsupportAttachmentsinvoicelist = createSelector(_payablesinvoicelistState,(state)=>{
    return state.customerAttachmentsSupporting;
})

export const getHistoryinvoicelist = createSelector(_payablesinvoicelistState,(state)=>{
    return state.customerinvoicelisthistory;
})

export const getErp = createSelector(_payablesinvoicelistState,(state)=>{
    return state.erp;
})

export const getcustomermyinbox = createSelector(_payablesinvoicelistState,(state)=>{
    return state.myinbox;
})

export const forwardState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.forward;
})

export const getComments = createSelector(_payablesinvoicelistState,(state)=>{
    return state.comments;
})

export const TrackerState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.tracker;
})

export const usersforforwardState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.usersforforward;
})


export const fetchforinvoices= createSelector(_payablesinvoicelistState,(state)=>{
    return state.fetchforinvoice;
})

export const executeactionState= createSelector(_payablesinvoicelistState,(state)=>{
    return state.executeaction;
})

export const getpatnerState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.custpatnerdetails;
})

export const postexternalinvoiceState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.custuploadexternalinvoice;
})

export const externalinvoicedeatilsState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.custexternalinvoicedetails;
})


export const sendreminderState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.sendreminder;
})

export const updateStatusState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.updatestatus;
})

export const PostupdateStatusState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.postupdatestatus;
})

export const paidrecordsState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.paidrecords;
})

export const templatenamessState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.templatenames;
})

export const templatedetailssState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.templatedetails;
})

export const getcustomerqueryState = createSelector(_payablesinvoicelistState,(state)=>{
    return state.querylist1;
})