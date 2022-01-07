import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})
export class PagetitleComponent implements OnChanges {

  constructor(private titleService:Title, private cd:ChangeDetectorRef,private appService:AppService) { }
  title:any="";
  loading=false;

  ngDoCheck()	{
  
      this.title=this.titleService.getTitle()


 
  }

  ngOnChanges(){
    this.title=this.titleService.getTitle()

  }

}
