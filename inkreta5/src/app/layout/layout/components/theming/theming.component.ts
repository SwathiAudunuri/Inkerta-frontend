import { Conditional } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {faPalette,faCog,faTimes,faCircle} from '@fortawesome/free-solid-svg-icons';
import { ThemingService } from 'src/app/theming.service';
import { LayoutComponent } from '../../layout.component';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.css']
})
export class ThemingComponent implements OnInit {

  constructor(private x:LayoutComponent,private theme:ThemingService) { }
  faCog:any=faCog
  faTimes:any=faTimes
  tick:any=faCircle
  @Input() loading:any

  ngOnInit(): void {
  }
  setmenutheme(theme:any){
   //console.log("in theme 1")
  //  this.x.setTheme("layout-topbar-green")
   // this.x.setTheme("darkTheme")
this.theme.setTheme(theme)


  }
}
