import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors } from 'ng2-charts';

@Component({
  selector: 'app-overduebartop10',
  templateUrl: './overduebartop10.component.html',
  styleUrls: ['./overduebartop10.component.css']
})
export class Overduebartop10Component implements OnInit {

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
        
        },
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
          labelString: "Customers",
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
  //   { data: [90000, 88000, 86000,84000,80000,78000,76000,72000,72000,62000,62000,60000,50000,48000,40000], label: 'c1', type: 'line' 
  // ,   datalabels: {
  //   // align: 'top',
  //   // color: 'white',
  //   backgroundColor: 'transparent',
  //   display: false
  // }
 // },
    { data: [90000, 88000, 86000,84000,80000,78000,76000,72000,72000,62000,], label: 'Top 15 Customers with High Overdue Amount',
     stack: 'a' , barPercentage: 0.5,barThickness: 12,
    datalabels: {
      // align: 'top',
      // color: 'white',
      // backgroundColor: '#3c8dbc',
      display: false
    }
  },
   
  ];
  public barChartLabels: string[] = ['appollo', 'reddyslabs', 'ramya pvt ltd','dell','apollo tubes',
                                      'kims hospitals','yashoda','kamineni','ultratech','burger king',
                                      ];
  public barChartColors: Colors[] = [
    {
      borderColor:"#f39c128a",
      backgroundColor:'#00b894'


//      backgroundColor:'#3c8dbc',#fafabe
    //backgroundColor:'rgb(59 ,130, 236)'
      //backgroundColor: '#febc3b',
    },
    {
      backgroundColor:'#f39c128a'
    }
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
