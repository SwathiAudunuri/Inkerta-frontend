import { Component, Input, OnChanges, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LayoutService } from 'src/app/layout/layout.service';
import { DASHBOARD_ICON, HISTORICAL_ICON, INVOICE_ICON, PROFILE, RECIPIENT, SUPPLIER, USER } from '../../icons.component';


@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnChanges {

  //@Input() item:any
  @Input() childs:any
  @ViewChild('drawer3')
  submenu!: SubmenuComponent;

  @Input() opened1:any
  constructor(private sanitizer:DomSanitizer,private iconRegistry:MatIconRegistry,private layout:LayoutService) { 

    iconRegistry.addSvgIconLiteral('recipient', sanitizer.bypassSecurityTrustHtml(RECIPIENT));
    iconRegistry.addSvgIconLiteral('supplier', sanitizer.bypassSecurityTrustHtml(SUPPLIER));
    iconRegistry.addSvgIconLiteral('Historical', sanitizer.bypassSecurityTrustHtml(HISTORICAL_ICON));
    iconRegistry.addSvgIconLiteral('users', sanitizer.bypassSecurityTrustHtml(USER));
    iconRegistry.addSvgIconLiteral('profile', sanitizer.bypassSecurityTrustHtml(PROFILE));
    iconRegistry.addSvgIconLiteral('payables', sanitizer.bypassSecurityTrustHtml(INVOICE_ICON));
    iconRegistry.addSvgIconLiteral('receivables', sanitizer.bypassSecurityTrustHtml(INVOICE_ICON));
    iconRegistry.addSvgIconLiteral('payables_dashboard', sanitizer.bypassSecurityTrustHtml(DASHBOARD_ICON));
    iconRegistry.addSvgIconLiteral('receivable_dashboard', sanitizer.bypassSecurityTrustHtml(DASHBOARD_ICON));
    iconRegistry.addSvgIconLiteral('payables_dashboard_one', sanitizer.bypassSecurityTrustHtml(DASHBOARD_ICON));
    iconRegistry.addSvgIconLiteral('receivable_dashboard_one', sanitizer.bypassSecurityTrustHtml(DASHBOARD_ICON));
    iconRegistry.addSvgIconLiteral('receivable_historical', sanitizer.bypassSecurityTrustHtml(HISTORICAL_ICON));

    
  } 
  data:any
  opened:any=false
  
  ngOnInit(): void {
    //console.warn(this.childs)

  }
  ngOnChanges(){
  }

  open(){
    this.opened1=true
    //console.log(this.opened1)

  }
  toggle(){
    this.opened1=false
    //console.log(this.opened1)

    // this.layout.open=false
    // this.opened1=this.layout.open
  }
}
