import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors, Label } from 'ng2-charts';
import  * as ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-ng2horizontal',
  templateUrl: './ng2horizontal.component.html',
  styleUrls: ['./ng2horizontal.component.css']
})
export class Ng2horizontalComponent implements OnInit {



  public barChartOptions: ChartOptions = {
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
          
         },
        }

      ],

      
    
  },

  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'end',
    }
  }
  ,
    responsive: true,
    
 
  };
  public barChartLabels: Label[] = ['Phoenix', 'Voltas', 'Polycab', 'Ashirvad', 'Finolex pipes', 'Dr Reddy labs','Ashirvad', 'Finolex pipes', 'Dr Reddy labs','Ashirvad', 'Finolex pipes', 'Dr Reddy labs'];
  //public barChartType: ChartType = 'bar';
  public barChartType: ChartType = "horizontalBar" as ChartType;
  public barChartLegend = true;
  public barChartPlugins = [ChartDataLabels]

    public barChartData: ChartDataSets[] = [
      { data: [65000, 59000, 8000, 81000, 56000, 55000,8000, 81000, 56000, 55000,8000, 81000, 56000, 55000], label: 'Due', stack: 'a',barThickness: 12,
  barPercentage: 0.5, },

    ];
    public barChartColors: Colors[] = [
      {
        backgroundColor:'#3c8dbc'
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
