import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { ExecuteAction, ExecuteActionnull } from '../../../Actions/ExcuteAction.actions';
import { executeactionState } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import * as vkbeautify from 'vkbeautify';
@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {

  loading: any = true;
  service: any;
  errormess: any;
  status: boolean = true;
  heading: any = null;
  action_id: any;
  resp_message: any = null
  html: any;
  service1: any;

  constructor(public dialogRef: MatDialogRef<CustomDialogComponent>, public unpaid: UnpaidService, public store: Store) { }

  ngOnInit() {
    // (<HTMLDivElement>document.getElementById('backend_div')).innerText=""
  //   (<HTMLDivElement>document.getElementById('backend_div')).innerHTML = `
  //   <h1>Hello</h1>
  //   <table>
  // <tr>
  //   <th>Company</th>
  //   <th>Contact</th>
  //   <th>Country</th>
  // </tr>
  // <tr>
  //   <td>Alfreds Futterkiste</td>
  //   <td>Maria Anders</td>
  //   <td>Germany</td>
  // </tr>
  // <tr>
  //   <td>Centro comercial Moctezuma</td>
  //   <td>Francisco Chang</td>
  //   <td>Mexico</td>
  // </tr>
  // <tr>
  //   <td>Ernst Handel</td>
  //   <td>Roland Mendel</td>
  //   <td>Austria</td>
  // </tr>
  // </table>
  //   `;

  // this.htmlconvert("<h1>Hello</h1><br>  <table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr></table>")
    this.unpaid.customactionname.subscribe((heading) => {
      // console.log(heading)
      this.heading = heading.action_name
      this.action_id = heading.action_id
    })
    this.store.dispatch(ExecuteActionnull())
    this.unpaid.loaderp.next(true)
    this.getdata()

    this.service1=this.store.select(executeactionState).subscribe((data: any) => {

      this.loading = data.loading
      // console.log(data)
      if (data.result) {
        //console.log("printed")
        if(data.result?.result){
        if (data.result?.result?.hasError) {
          this.errormess = data.result?.result?.errors?.errorMessage
          this.status = false
          //console.log(data)
        }
        else if(!data.result?.result?.hasError) {

          this.resp_message = data.result?.result?.results
          
          this.resp_message = vkbeautify.xml(data.result?.result?.results?.response_body)
          this.htmlconvert(data.result?.result?.results?.transformed_body)
          //console.log(data.result.result.results)

          // this.htmlconvert()
        }
      }
      }
    })
  }
  htmlconvert(content:any) {
    // htmlconvert() {
    // //console.log(content);
    
    let html = content; 
    let htmlObject = document.createElement('div');
    htmlObject.innerHTML = html;
    //console.log(htmlObject);
    this.html = html; 
    this.html = htmlObject;
    (<HTMLDivElement>document.getElementById('backend_div')).append(this.html)
    this.html=null
  }
  getdata() {
    //console.log(Constants.Execute_Action + this.action_id + "/" + this.unpaid.ref)
    const url = Constants.Execute_Action + this.action_id + "/" + this.unpaid.ref
    this.store.dispatch(ExecuteAction({ url: url }))
  }
  close() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
    //console.log("in destroy")
    // document.getElementById('backend_div')?.remove()
    this.heading = null
    // this.service.unsubscribe()
    this.service1.unsubscribe()
    this.store.dispatch(ExecuteActionnull())
  }
}
