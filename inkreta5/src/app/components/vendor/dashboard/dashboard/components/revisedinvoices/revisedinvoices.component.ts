import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors, Label } from 'ng2-charts';
import  * as ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-revisedinvoices',
  templateUrl: './revisedinvoices.component.html',
  styleUrls: ['./revisedinvoices.component.css']
})
export class RevisedinvoicesComponent implements OnInit {

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
          labelString: "Revised Invoices",
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
  public barChartLabels: Label[] = ['january', 'febraury', 'march','april','may','june','july','august','september','october','november','december'];
  //public barChartType: ChartType = 'bar';
  public barChartType: ChartType = "bar" as ChartType;
  public barChartLegend = true;
   public barChartPlugins = [ChartDataLabels]

    public barChartData: ChartDataSets[] = [
      { data: [65000, 59000, 8000, 81000, 56000, 55000,65000, 59000, 8000, 81000, 56000, 55000], label: 'Phoenix', stack: 'a',
      barPercentage: 0.1,barThickness: 1, },
     
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
