import { AfterViewInit, Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
@Component({
  selector: 'app-horizontalbarchart',
  templateUrl: './horizontalbarchart.component.html',
  styleUrls: ['./horizontalbarchart.component.css']
})
export class HorizontalbarchartComponent implements AfterViewInit {

  @Input() vendors:any;   
  @Output()  findByVendor:EventEmitter<any>=new EventEmitter(); 
  

  constructor() { }
  private margin = {top: 20, right: 30, bottom: 40, left: 90}
  private  width = 460 - this.margin.left - this.margin.right
  private  height = 200 - this.margin.top - this.margin.bottom;
  svg:any;
  data =[
       
    {
        "Vendor":"DRL",
        "Value":11394
    },{
        "Vendor":"Attra",
        "Value":10000
    },
    {
        "Vendor":"mahindra",
        "Value":12000
    },
    {
        "Vendor":"capgemini",
        "Value":12000
    },
    {
        "Vendor":"tecnics",
        "Value":7000
    },
    {
      "Vendor":"tecnics1",
      "Value":7000
  },
  {
    "Vendor":"tecnics2",
    "Value":7000
},
{
  "Vendor":"tecnics3",
  "Value":7000
},
{
  "Vendor":"tecnics4",
  "Value":7000
},
{
  "Vendor":"tecnics5",
  "Value":7000
},
{
  "Vendor":"tecnics6",
  "Value":7000
},
{
  "Vendor":"tecnics7",
  "Value":7000
},
   
    ]    
    temp=this.data
  ngOnInit(): void {
    this.buildSvg()
    this.createChart()
  }
  ngOnChanges()	
  {
    this.data=this.temp
  if(this.vendors){
//  d3.select("my_dataviz").remove();


////console.log(z)
 d3.select("#my_dataviz").selectAll("svg").remove() 
 this.data=this.data.filter(x=>x.Vendor===this.vendors)


this.buildSvg()

  this.createChart()
  }
}
ngAfterViewInit(){
  //console.log(this.vendors)
  // this.buildSvg()
  // this.createChart()
}
ngAfterContentInit()	
{
  //console.log(this.vendors)
}


  buildSvg(){
     this.svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", this.width + this.margin.left + this.margin.right)
    .attr("height", this.height + this.margin.top + this.margin.bottom)
  .append("g")
    .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
  }
  createChart(){
    const  xScale = d3.scaleLinear()
    .domain([0, 13000])
    .range([ 0, this.width]);
this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");


  // Y axis
  var yScale = d3.scaleBand()
    .range([ 0, this.height ])
    .domain(this.data.map(function(d) { return d.Vendor }))
    .padding(.3);
  this.svg.append("g")
      .call(d3.axisLeft(yScale))
  this.svg
      .selectAll(".bar")
      .data(this.data)
      .join("rect")
      .attr("class", "bar")
      .attr("y",function(d:any){return yScale(d.Vendor)})
      .attr("height",yScale.bandwidth())
      .attr("width",function(d:any){ return xScale(d.Value)})
      .attr("fill","blue")
      .on("click",(d:any)=>{
        //console.log(d.target.__data__)
        this.findByVendor.emit(d.target.__data__)
      })
  }
 
}
