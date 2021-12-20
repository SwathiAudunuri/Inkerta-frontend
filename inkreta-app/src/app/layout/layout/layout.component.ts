import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { reducers } from 'src/app/app.reducer1';
import { LayoutService } from '../layout.service';
import { DASHBOARD_ICON,INVOICE_ICON,GENERAL_ICON,FAQ_ICON,MENU_ICON,UPLOAD_ICON, ADMIN1, INVOICE_ICON1 } from "./icons.component";
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
  import { ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { faCoffee,faSlidersH,fas,faPalette, faPaintRoller} from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ThemingComponent } from './components/theming/theming.component';


export const darkThemes = {
  'primary-color': 'red',
  'background-color': '#1f2935',
  'text-color': '#fff'
};

export const lightThemes = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d'
};
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})


export class LayoutComponent implements OnInit,AfterViewInit{
 // @ViewChild(ThemingComponent) child:ThemingComponent;
  active:any=true
  data:any
  themeclass:any="DarkTheme"
  faPalette:any=faPalette
  isClicked:any=false;
  color:any="var(primary)";
  title:any="";
  loading:any=false;
  faPaintRoller:any=faPaintRoller
  @ViewChild(ThemingComponent) themeref?:ThemingComponent;
  ngAfterViewInit(){}
  constructor(private activatedRoute: ActivatedRoute,  
    private titleService: Title,private router: Router,private ngbconfigs: NgbDropdownConfig,private elementRef: ElementRef,private renderer: Renderer2,private auth:AuthService,private layout:LayoutService,private http:HttpClient,private iconRegistry: MatIconRegistry,private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('dashboard', sanitizer.bypassSecurityTrustHtml(DASHBOARD_ICON));
    iconRegistry.addSvgIconLiteral('Invoice', sanitizer.bypassSecurityTrustHtml(INVOICE_ICON));
    iconRegistry.addSvgIconLiteral('Invoice1', sanitizer.bypassSecurityTrustHtml(INVOICE_ICON1));
    iconRegistry.addSvgIconLiteral('General', sanitizer.bypassSecurityTrustHtml(GENERAL_ICON));
    iconRegistry.addSvgIconLiteral('Faq', sanitizer.bypassSecurityTrustHtml(FAQ_ICON));
    iconRegistry.addSvgIconLiteral('Menu', sanitizer.bypassSecurityTrustHtml(MENU_ICON));
    iconRegistry.addSvgIconLiteral('Upload', sanitizer.bypassSecurityTrustHtml(UPLOAD_ICON));
    iconRegistry.addSvgIconLiteral('admin1', sanitizer.bypassSecurityTrustHtml(ADMIN1));



    // ngbconfigs.placement = 'dropRight';
    ngbconfigs.autoClose = false;


   }
   @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
   icon1='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg>';
    icons=`<mat-icon svgIcon={{this.icon1}} ></mat-icon>`

    faSlidersH:any=faSlidersH
   opened=true;
  opened1=false;
  childs:any 
  isActive = true;
  data1:any;
  isDarktheme:boolean=true
  breadcrumbConfig: any = {
    bgColor: '#f5f9ff',
    fontSize: '13px',
    fontColor: 'black',
    lastLinkColor: 'var(--primary)',
    symbol: ' > ',
  };
  public config: PerfectScrollbarConfigInterface = {};
  public sidenavclickedclass="Dashboard"
  ngOnChanges(){
    console.log("in changes")
    this.title=this.titleService.getTitle()

  }
  // ngAfterViewInit(){
  //   this.router.events.pipe(
  //     filter((event) => event instanceof NavigationEnd),
  //     map(() => this.activatedRoute),
  //     map((route: any) => {
  //       while (route.firstChild) route = route.firstChild;
  //       return route;
  //     }),
  //     filter((route) => route.outlet === 'primary'),
  //     mergeMap((route: any) => route.data)).subscribe((event) => {
  //       const title:any=event
  //        this.titleService.setTitle(title['title']);
  //        console.log('Page Title', title);
  //     });
  //   if(this.titleService.getTitle()){
  //   this.title=this.titleService.getTitle()
  //   console.log("in after")
  //   console.log(this.titleService.getTitle())

  //   }
  //   console.log("in after")

  // }

  ngOnInit(): void {
  
    
   //this.title=this.titleService.getTitle()
   console.log(this.title)
    this.getData()
  }
  getData(){
    this.layout.sideIcons().subscribe(res=>{
      this.data=res
      this.data=this.data.results
      console.log(this.data)
    })
  }
  children(element:any){
    this.sidenavclickedclass=element.itemName
    console.log(this.sidenavclickedclass)
   //const  activeclass=document.querySelector(".active")
 //  this.renderer.removeStyle(activeclass,'color')

//this.renderer.setStyle(activeclass,'border-left','transparent')
// this.renderer.removeClass("active")
   // console.log(element)
 // this.sidenavclickedclass="active"

    this.childs=element
    this.childs=this.childs.childs
    this.opened1=!this.opened1
    console.log(this.opened1)

  }
  profileroute(){
    console.log("clicked on profile")
    this.router.navigate(['app/vendor_manager/profileview'])
  }
  loggingout(){
    console.log("in Logging")
    this.auth.logout()

  }
  setTheme(theme:any){
    console.log("in theme 2")

    if(theme=="darkTheme"){
      this.themeclass="darkTheme"
      console.log("in theme 1")

      // Object.keys(theme).forEach(k =>
      //   document.documentElement.style.setProperty(`--${k}`, theme[k])
      // );
      }
      if(theme=="lightTheme"){

        this.themeclass="lightTheme"
        }
        this.themeclass=theme
  }
  theme(){
    this.isClicked=true    
  }
  themeopen(){
    this.loading= !this.loading
    console.log("in hteme")
  }
}
