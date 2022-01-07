import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label,  } from 'ng2-charts';
import {Chart} from 'chart.js';
import * as  ChartDataLabels from 'chartjs-plugin-datalabels';
import { truncate } from 'lodash';
import { reducers } from 'src/app/app.reducer1';
@Component({
  selector: 'app-ng2linearea',
  templateUrl: './ng2linearea.component.html',
  styleUrls: ['./ng2linearea.component.css']
})
export class Ng2lineareaComponent implements OnInit {
 Chart!: Chart;
 

  public lineChartData: ChartDataSets[] = [
    { data: [65000, 59000, 80000, 81000, 56000, 55000, 40000], label: 'Phoenix Infra tech',
    type:'line',
    datalabels: {
      // align: 'top',
      // color: 'white',
      // backgroundColor: '#3c8dbc',
      display: false
    }
  },
  { data: [30000, 40000, 20000, 41000, 36000, 85000, 60000], label: 'Ashirvad Pipes' ,
  type:'line',
  datalabels: {
    // align: 'top',
    // color: 'white',
    // backgroundColor: 'rgb(96 175 32)',
    display: false
  }
},
//   { data: [65000, 59000, 80000, 81000, 56000, 55000, 40000], label: 'Phoenix Infra tech',
//   type:'bar',
//   datalabels: {
//     // align: 'top',
//     // color: 'white',
//     // backgroundColor: '#3c8dbc',
//     display: false
//   }
// },
//  { data: [30000, 40000, 20000, 41000, 36000, 85000, 60000], label: 'Ashirvad Pipes' ,
//     type:'bar',
//     datalabels: {
//       // align: 'top',
//       // color: 'white',
//       // backgroundColor: 'rgb(96 175 32)',
//       display: false
//     }
//   },


  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    
  
    scales:{
      xAxes: [
        {
          ticks: {
           display: true,
          },
          gridLines: {
            display:false
        }
        }
      ],
      yAxes: [
        {
          ticks: {
           display: true,
          },
          gridLines: {
            display:false
        },
        scaleLabel: {
          display: true,
          labelString: "Outstanding Amount",
         },
        }
      ],
    
  },
  tooltips:{
    displayColors:false,
    backgroundColor:'#f1f3f4',
    titleFontColor:'black',
    bodyFontColor:'black'
  },
  plugins:{
    zoom:{
      zoom:{
        pan:{
          enabled:true,
          mode:'xy'
        }
      }

    }

  },
    responsive: true,
 
  };
  public lineChartColors: Color[] = [
    {
      borderColor:"#3c8dbc",
     // borderColor:'#6201ee',
     backgroundColor: 'rgba(98,2,238,0.1)',
    },
    {
      borderColor:'rgb(96 175 32)',
      backgroundColor:'rgba(225, 250, 242,0.5)'
    }
  
  ];
  public lineChartLegend = true;
  public lineChartType : ChartType='bar';
  public lineChartPlugins = [ ];

  constructor() { 
    
  }

  ngOnInit() {
    
  }
  public chartClicked(e: any): void {
    if (e.active.length > 0) {
    const chart = e.active[0]._chart;
    const activePoints = chart.getElementAtEvent(e.event);
      if ( activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        //console.log(clickedElementIndex, label, value)
        //console.log(chart.data)
        //console.log(chart.data.datasets[0])
        //console.log(activePoints[0]._datasetIndex)
      }
     }
    }

}
