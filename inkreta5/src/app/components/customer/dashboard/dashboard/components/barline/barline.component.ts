import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors } from 'ng2-charts';

@Component({
  selector: 'app-barline',
  templateUrl: './barline.component.html',
  styleUrls: ['./barline.component.css']
})
export class BarlineComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    animation:{
     

    },

    scales:{
      xAxes: [
        {
          ticks: {
           display: true,
          },
          gridLines: {
            display:false
        },
        
        }
      ],
      yAxes: [
        {
          ticks: {
           display: true,
          },
          gridLines: {
            display:true
        },
        scaleLabel: {
          display: true,
          labelString: "Invoice Number",
         },
        }

      ],

      
    
  },
  
  plugins: {
    
    datalabels: {
      
      display:false,
      // anchor: 'end',
      // align: 'end',
      // font: {
      //   size: 9,
      // }
    },
    zoom:{
      zoom:{
        wheel:{
          
          enabled: true,
          drag: true,
          mode: 'x'
        }
      }
    }
  }
  ,
    responsive: true,
    
 
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [1000, 2000, 3000,5000,], label: 'c1', type: 'line' 
  ,   datalabels: {
    // align: 'top',
    // color: 'white',
    backgroundColor: 'transparent',
    display: false
  }
  },
    { data: [1000, 2000, 3000,5000], label: 'c1', stack: 'a' , barPercentage: 1,barThickness: 18,
    datalabels: {
      // align: 'top',
      // color: 'white',
      // backgroundColor: '#3c8dbc',
      display: false
    }},
   
  ];
  public barChartLabels: string[] = ['week1', 'week2', 'week3','week4'];
  public barChartColors: Colors[] = [
    {
      borderColor:"#3c8dbc",

//      backgroundColor:'#3c8dbc',
    //backgroundColor:'rgb(59 ,130, 236)'
      //backgroundColor: '#febc3b',
    },
    {
      backgroundColor:'#bed3fd'
    }
  
  ];
  constructor() { }

  ngOnInit() {
  }

  
 
 

}
