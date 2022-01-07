import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from './search.service';

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
  date!: { year: number; month: number; };


  ngOnInit(): void {
    // //console.log(this.searchKey)
    // this.search.emit("inv99")
  }
  searchinput( value:any){
    
    this.searchKey =   value
    // //console.log(this.searchKey)
    this.search.emit(this.searchKey)
  }
  
}
