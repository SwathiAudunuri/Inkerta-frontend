import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from './search.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() public search:any = new EventEmitter();
  constructor(public searchi:SearchService) { }
  searchKey:string=""
  // searchi:any;
  model!: NgbDateStruct;
  faSearch:any=faSearch
  date!: { year: number; month: number; };

  active:any
  hover:any=false
  ngOnInit(): void {
    // //console.log(this.searchKey)
    // this.search.emit("inv99")
  }
  searchinput( value:any){
    
    this.searchKey =   value
    // //console.log(this.searchKey)
    this.search.emit(this.searchKey)
  }
  addClass(){
   const item= document.querySelector('.expsearchitem')
  //  this.active='active'
  //  this.hover=!this.hover
  }
 enter(){
  this.hover=true
 } 
 leave(){
   this.hover=false
 }
 mouseEnter(div : string){
  //console.log("mouse enter : " + div);
  this.active='active'
  this.hover=!this.hover
}
}
