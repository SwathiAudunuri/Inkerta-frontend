import { Component, OnInit } from '@angular/core';
import { faCoffee,faPaintRoller,fas,faPalette,faFileAlt,faFileInvoiceDollar,faHistory,faDraftingCompass,faFileContract} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-historicalanalysis',
  templateUrl: './historicalanalysis.component.html',
  styleUrls: ['./historicalanalysis.component.css']
})
export class HistoricalanalysisComponent implements OnInit {

  public chartData: Array<any>=[];
  vendors: any;

  constructor() { }
  active:any=1
  //private chartData: Array<any>=[];
  public barData: any[] = [
    {vendor: "Vendor1", frequency: 500},
    {vendor: "Vendor2", frequency: 700},
    {vendor: "Vendor3", frequency: 3000},
    {vendor: "Vendor4", frequency: 400},
    {vendor: "Vendor5", frequency: 1000},
    {vendor: "Vendor6", frequency: 700},
    {vendor: "Vendor7", frequency: 4000},
  ];

  
   barColors: Array<string> = [
    "#98abc5", 
    "#8a89a6", 
    "#7b6888", 
    "#6b486b", 
    "#a05d56", 
    "#d0743c", 
    "#ff8c00"
  ];
  
  pieData: any[] = [
    {age: "<5", population: 2704659},
    {age: "5-13", population: 4499890},
    {age: "14-17", population: 2159981},
    {age: "18-24", population: 3853788},
    {age: "25-44", population: 14106543},
    {age: "45-64", population: 8819342},
    {age: "≥65", population: 612463}
  ];
  
  pieColors: Array<string> = [
    "#98abc5", 
    "#8a89a6", 
    "#7b6888", 
    "#6b486b", 
    "#a05d56", 
    "#d0743c", 
    "#ff8c00"
  ];
    lineData: any[] = [
    {"date":"01/01/2016", "a": 250, "b": 0, "c": 0, "d": 0},
    {"date":"01/02/2016", "a": 150, "b": 80, "c": 20, "d": 0},
    {"date":"01/03/2016", "a": 150, "b": 70, "c": 10, "d": 20},
    {"date":"01/04/2016", "a": 150, "b": 30, "c": 30, "d": 40},
    {"date":"01/05/2016", "a": 100, "b": 100, "c": 200, "d": 80},
    {"date":"01/06/2016", "a": 50, "b": 80, "c": 90, "d": 70},
  ];
  
    lineColors: Array<string> = [
    "#ADD8E6", 
    "#FFD580", 
    "#FFD580", 
    "#FF6666", 
  ];
  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
  
  }

  findByVendor(data:any){
    //console.log(data.Vendor)
    this.vendors=data.Vendor      
  }
  faCoffee:any = faCoffee;
  // faSlidersH:any=faSlidersH;
  faPaintRoller:any=faPaintRoller
  faPalette:any=faPalette
  faFileInvoiceDollar:any=faFileInvoiceDollar
  faFileContract:any=faFileContract
  faDraftingCompass:any=faDraftingCompass
  faHistory:any=faHistory
  faFileAlt:any=faFileAlt
}
