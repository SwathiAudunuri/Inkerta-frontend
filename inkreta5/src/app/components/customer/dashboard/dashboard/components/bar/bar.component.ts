import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors, Label, } from 'ng2-charts';
//import  'chartjs-plugin-datalabels';
import  * as ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {


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
          labelString: "Outstanding Amount",
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
  public barChartLabels: Label[] = ['On Time', 'Late 1-30 days', 'Late 31-60 days', 'Late 61-90 days', 'Late 91-120 days', ' Late >120days'];
  //public barChartType: ChartType = 'bar';
  public barChartType: ChartType = "bar" as ChartType;
  public barChartLegend = true;
  public barChartPlugins = [ChartDataLabels]

    public barChartData: ChartDataSets[] = [
      { data: [65000, 59000, 8000, 81000, 56000, 55000], label: 'Phoenix', stack: 'a',barThickness: 8,
      barPercentage: 0.3, },
      { data: [28000, 48000, 40000, 19000, 86000, 27000], label: 'Ashirvad', stack: 'b' ,barThickness: 8,
      barPercentage: 0.3,}
    ];
    public barChartColors: Colors[] = [
      {
        backgroundColor:'#3c8dbc',
      //backgroundColor:'rgb(59 ,130, 236)'
        //backgroundColor: '#febc3b',
      },
      {
        backgroundColor:'#84aef2'
      }
    
    ];
  constructor() { }

  ngOnInit() {

  }
}
