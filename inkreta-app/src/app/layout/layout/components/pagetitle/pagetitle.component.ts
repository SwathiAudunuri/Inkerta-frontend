import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})
export class PagetitleComponent implements AfterViewInit {

  constructor(private titleService:Title) { }
  title:any=null;
  loading=false;
  ngAfterViewInit(){
    this.title=this.titleService.getTitle()
 
  }
  ngOnInit(){
    this.title=this.titleService.getTitle()

  }

  ngOnChanges(){
    this.title=this.titleService.getTitle()

  }

}
