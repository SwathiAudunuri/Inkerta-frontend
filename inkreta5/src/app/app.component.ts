import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ThemingService } from './theming.service';
import { Title } from '@angular/platform-browser';  
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';  
import { filter, map, mergeMap } from 'rxjs/operators';  
import { AppService } from './app.service';
import { LoadingService } from './loading/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inkreta';
  themes1="theme-default.css"
  loading$ = this.loader.loading$;
  constructor(private theme:ThemingService,private renderer:Renderer2,private activatedRoute: ActivatedRoute,  
    private titleService: Title,private router: Router, private appService:AppService, public loader: LoadingService){
    
  }
  
  ngOnInit(){

   this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
    map((route: any) => {
      while (route.firstChild) route = route.firstChild;
      return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route: any) => route.data)).subscribe((event) => {
      const title:any=event
       this.titleService.setTitle(title['title']);
       this.appService.title=title['title']
       //console.log('Page Title', title['title']);
    });
    this.theme.setTheme(this.themes1)
  }
  themes(){
  
  const y=document.querySelector("head")
    //console.log(y)

    const x=document.createElement("link")  
    x.setAttribute("rel","stylesheet")
    x.setAttribute("href",this.themes1)
    //console.log(x)
    if(y){
    y.appendChild(x)
    }
    //console.log(y)

  }



}
