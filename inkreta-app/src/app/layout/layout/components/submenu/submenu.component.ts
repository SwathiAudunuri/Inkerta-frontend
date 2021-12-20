import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HISTORICAL_ICON, RECIPIENT, SUPPLIER } from '../../icons.component';


@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  //@Input() item:any
  @Input() childs:any

  @Input() opened1:any
  constructor(private sanitizer:DomSanitizer,private iconRegistry:MatIconRegistry) { 

    iconRegistry.addSvgIconLiteral('Reciepient', sanitizer.bypassSecurityTrustHtml(RECIPIENT));
    iconRegistry.addSvgIconLiteral('Supplier', sanitizer.bypassSecurityTrustHtml(SUPPLIER));
    iconRegistry.addSvgIconLiteral('Historical', sanitizer.bypassSecurityTrustHtml(HISTORICAL_ICON));

  } 
  data:any
  opened:any=false
  
  ngOnInit(): void {
console.log(this.opened1)
  }
  toggle(){
    this.opened1=!this.opened1
  }
}
