import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee,faPaintRoller,fas,faPalette,faFileAlt,faFileInvoiceDollar,faHistory,faDraftingCompass,faFileContract} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(  private renderer: Renderer2,private router:Router) { }
  faFileAlt:any=faFileAlt
  faFileInvoiceDollar:any=faFileInvoiceDollar
  faHistory:any=faHistory
  faDraftingCompass:any=faDraftingCompass
  faFileContract:any =faFileContract

  ngOnInit(): void {

    // const body = document.querySelector('.main_body')
    // this.renderer.setStyle(body,'background-color','red')
  }
  @ViewChild('unpaid') span:any;
  ngAfterViewInit(){
    const x:ElementRef=this.span
    console.log(this.span)
    //this.span.nativeElement.setAttribute('display', 'none');
  } 

active:any=true
c:any=10
b:any
vendors:any;
faCoffee:any = faCoffee;
// faSlidersH:any=faSlidersH;
faPaintRoller:any=faPaintRoller
faPalette:any=faPalette
errordata(){
  const a=null;

  this.b=this.c/0
  this.c =this.b/0

}

routenew(){

  this.router.navigate(['app/customer_admin/invoicedetails/:id'])
}
findByvendor(data:any){
console.log(data)
  this.vendors=data.series
}

}
