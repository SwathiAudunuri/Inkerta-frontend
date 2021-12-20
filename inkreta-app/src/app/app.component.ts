import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ThemingService } from './theming.service';
import { Title } from '@angular/platform-browser';  
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';  
import { filter, map, mergeMap } from 'rxjs/operators';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inkreta';
  themes1="theme-default.css"
  constructor(private theme:ThemingService,private renderer:Renderer2){
    
  }
  
  ngOnInit(){
   //this.themes()
    this.theme.setTheme(this.themes1)
  }
  themes(){
  
  const y=document.querySelector("head")
    console.log(y)

    const x=document.createElement("link")  
    x.setAttribute("rel","stylesheet")
    x.setAttribute("href",this.themes1)
    console.log(x)
    if(y){
    y.appendChild(x)
    }
    console.log(y)

  }
  


}
