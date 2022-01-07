import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors, Label } from 'ng2-charts';
import  * as ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-ng2stackedbar',
  templateUrl: './ng2stackedbar.component.html',
  styleUrls: ['./ng2stackedbar.component.css']
})
export class Ng2stackedbarComponent implements OnInit {

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
          labelString: "Number of Invoices",
         },
        }

      ],

      
    
  },

  plugins: {
    datalabels: {
      anchor: 'center',
      align: 'center',
    }
  }
  ,
    responsive: true,
    
 
  };
  public barChartLabels: Label[] = ['Phoenix', 'Ashirvad', 'Dr Reddy labs', 'Finolex Pipes', 'Polycab', 'Voltas'];
  //public barChartType: ChartType = 'bar';
  public barChartType: ChartType = "bar" as ChartType;
  public barChartLegend = true;
  public barChartPlugins = [ChartDataLabels]

    public barChartData: ChartDataSets[] = [
      { data: [65000, 59000, 8000, 81000, 56000, 55000], label: 'Approved', stack: 'a',barThickness: 16,
      barPercentage: 0.3, },
      { data: [28000, 48000, 40000, 19000, 86000, 27000], label: 'Pending', stack: 'a' ,barThickness: 16,
      barPercentage: 0.3,},
      { data: [28000, 48000, 40000, 19000, 86000, 27000], label: 'Exception', stack: 'a' ,barThickness: 16,
      barPercentage: 0.3,}
    ];
    public barChartColors: Colors[] = [
      {
        backgroundColor:'#92d05078'
      //backgroundColor:'rgb(59 ,130, 236)'
        //backgroundColor: '#febc3b',
      },
      {
        backgroundColor:'#ffc00070'
      },
      {
        backgroundColor:'#e7111170'
      }
    
    ];
  constructor() { }

  ngOnInit() {

  }

}
