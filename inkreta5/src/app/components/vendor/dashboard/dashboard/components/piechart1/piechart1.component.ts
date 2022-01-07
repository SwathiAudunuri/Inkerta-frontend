import { Component, OnInit, Input, HostListener ,EventEmitter, Output} from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
@Component({
  selector: 'app-piechart1',
  templateUrl: './piechart1.component.html',
  styleUrls: ['./piechart1.component.css']
})
export class Piechart1Component implements OnInit {

  @Output() findByvendor :EventEmitter<any>=new EventEmitter()

  ngOnInit(){

  }
  saleData = [
    { name: "DRL", value: 105000 },
    { name: "Attra", value: 55000 },
    { name: "Capgemini", value: 15000 },
    { name: "tecnics", value: 15000 },
    { name: "mahindra", value: 15000 },
    { name: "Tatva", value: 100000 },
    { name: "Tata", value: 15000 },
    { name: "Titan", value: 15000 },



  ];
  customColors={domain:["#ADD8E6","#FFD580","#C4A484"]}
  onSelect($event:any){
    //console.log($event)
    this.findByvendor.emit($event)
  }
}
