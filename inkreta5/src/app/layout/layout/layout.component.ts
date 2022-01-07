import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { reducers } from 'src/app/app.reducer1';
import { LayoutService } from '../layout.service';
import { DASHBOARD_ICON,GENERAL_ICON,FAQ_ICON,MENU_ICON,UPLOAD_ICON, ADMIN, APPLICATIONS_ICON, INVOICE_ICON, INBOX, LOG, TODO, CHAT, CATALOGUE, ROLES, ACTION, PEOPLES, PAYABLES, TRAKING_ICON ,icon_payable} from "./icons.component";
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
import { SubmenuComponent } from './components/submenu/submenu.component';
import { Store } from '@ngrx/store';
import { TimelineComponent } from 'src/app/components/customer/invoicelist/invoicelist/components/timeline/timeline.component';
import { MatDialog } from '@angular/material/dialog';


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
  @ViewChild('breadcrumb', { static: false }) breadcrumbs!: ElementRef;

  @ViewChild(SubmenuComponent)
  submenu!: SubmenuComponent;
  href!: string;
  link!: string;


  constructor(private activatedRoute: ActivatedRoute,private store:Store, public dialog: MatDialog, private cdref: ChangeDetectorRef,
    private titleService: Title,private router: Router,private ngbconfigs: NgbDropdownConfig,private elementRef: ElementRef,private renderer: Renderer2,private auth:AuthService,private layout:LayoutService,private http:HttpClient,private iconRegistry: MatIconRegistry,private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('dashboard', sanitizer.bypassSecurityTrustHtml(DASHBOARD_ICON));
    iconRegistry.addSvgIconLiteral('ApplicationsIcon', sanitizer.bypassSecurityTrustHtml(APPLICATIONS_ICON));
    iconRegistry.addSvgIconLiteral('invoice', sanitizer.bypassSecurityTrustHtml(INVOICE_ICON));
    iconRegistry.addSvgIconLiteral('General', sanitizer.bypassSecurityTrustHtml(GENERAL_ICON));
    iconRegistry.addSvgIconLiteral('Faq', sanitizer.bypassSecurityTrustHtml(FAQ_ICON));
    iconRegistry.addSvgIconLiteral('Menu', sanitizer.bypassSecurityTrustHtml(MENU_ICON));
    iconRegistry.addSvgIconLiteral('Upload', sanitizer.bypassSecurityTrustHtml(UPLOAD_ICON));
    iconRegistry.addSvgIconLiteral('admin', sanitizer.bypassSecurityTrustHtml(ADMIN));
    iconRegistry.addSvgIconLiteral('notifications', sanitizer.bypassSecurityTrustHtml(INBOX));
    iconRegistry.addSvgIconLiteral('log', sanitizer.bypassSecurityTrustHtml(LOG));
    iconRegistry.addSvgIconLiteral('todo', sanitizer.bypassSecurityTrustHtml(TODO));
    iconRegistry.addSvgIconLiteral('chat', sanitizer.bypassSecurityTrustHtml(CHAT));
    iconRegistry.addSvgIconLiteral('product catalogue', sanitizer.bypassSecurityTrustHtml(CATALOGUE));
    iconRegistry.addSvgIconLiteral('tracking icon', sanitizer.bypassSecurityTrustHtml(TRAKING_ICON));
    iconRegistry.addSvgIconLiteral('roles', sanitizer.bypassSecurityTrustHtml(ROLES));
    iconRegistry.addSvgIconLiteral('custom_action', sanitizer.bypassSecurityTrustHtml(ACTION));
    iconRegistry.addSvgIconLiteral('peoples', sanitizer.bypassSecurityTrustHtml(PEOPLES));
    iconRegistry.addSvgIconLiteral('payable', sanitizer.bypassSecurityTrustHtml(PAYABLES));
 iconRegistry.addSvgIconLiteral('icon_payable', sanitizer.bypassSecurityTrustHtml(icon_payable));




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
    bgColor: 'var(--tertiary)',
    fontSize: '13px',
    fontColor: 'black',
    lastLinkColor: 'var(--primary)',
    symbol: ' > ',
  };
  public config: PerfectScrollbarConfigInterface = {};
  public sidenavclickedclass="Dashboard"
  firstName:any;
  lastName:any;
  role:any;
  partnerName:any;
  item:any
  ngOnChanges(){
    //console.log("in changes")
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
  //        //console.log('Page Title', title);
  //     });
  //   if(this.titleService.getTitle()){
  //   this.title=this.titleService.getTitle()
  //   //console.log("in after")
  //   //console.log(this.titleService.getTitle())

  //   }
  //   //console.log("in after")

  // }
  ngAfterViewInit(){
    
   this.setData()
  }
   setData(){
     this.layout.href.subscribe(data=>{
     // this.href=data
          this.renderer.setAttribute(this.breadcrumbs.nativeElement,'href',data)



     })
     this.layout.link.subscribe(data=>{
   this.renderer.setProperty(this.breadcrumbs.nativeElement,'innerHTML',data)


     })
// this.item=item
this.cdref.detectChanges();

   }
  
  ngOnInit(): void {

    this.store.subscribe(data=>{
      this.firstName=data
      this.lastName=data
      this.role=data
      this.partnerName=data
      this.firstName=this.firstName.loginReducer.user.firstName
      this.lastName=this.lastName.loginReducer.user.lastName
      this.role=this.role.loginReducer.user.roles
      this.partnerName=this.partnerName.loginReducer.user.partnerName
     // //console.log(this.partnerName.loginReducer.user.partnerName)
      if(this.role=="customer_manager"){
        this.role="Customer Manager"
      }
      if(this.role=="customer_user"){
        this.role="Customer User"
      }

 
    })
    
    this.getData()
  }
  getData(){
    this.layout.sideIcons().subscribe(res=>{
      this.data=res
      this.data=this.data.results
      //console.log(this.data)
    })
  }
  children(element:any){
    if(element.itemRoute!=="null"){
    this.router.navigate([element.itemRoute])
    }
    this.sidenavclickedclass=element.itemName
    //console.log(this.sidenavclickedclass)
   //const  activeclass=document.querySelector(".active")
 //  this.renderer.removeStyle(activeclass,'color')

//this.renderer.setStyle(activeclass,'border-left','transparent')
// this.renderer.removeClass("active")
   // //console.log(element)
 // this.sidenavclickedclass="active"

    this.childs=element
    this.childs=this.childs.childs
    //console.log(this.submenu)
   this.submenu.open()
    // this.opened1=this.layout.openDrawer()
    ////console.log(this.opened1)

  }
  tracking_com(){
    
    const dialogRef = this.dialog.open(TimelineComponent,{panelClass: 'custom-dialog-container' });
  }
  profileroute(){
    //console.log("clicked on profile")
    this.router.navigate(['app/customer_manager/profileview'])
  }
  loggingout(){
    //console.log("in Logging")
    this.auth.logout()
  }
  setTheme(theme:any){
    //console.log("in theme 2")

    if(theme=="darkTheme"){
      this.themeclass="darkTheme"
      //console.log("in theme 1")

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
    //console.log("in hteme")
  }

}
