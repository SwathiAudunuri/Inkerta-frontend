import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartType } from 'chart.js';
import { Color } from 'd3-color';
import { Label } from 'ng2-charts';
import * as  ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-ng2area',
  templateUrl: './ng2area.component.html',
  styleUrls: ['./ng2area.component.css']
})
export class Ng2areaComponent implements OnInit {

  @Input() areacolor:any;
  public lineChartData: ChartDataSets[] = [
    { data: [65000, 59000, 80000, 81000, 56000, 55000, 40000], label: 'Phoenix Infra tech' },


  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    plugins: {
      datalabels: {
        display:false
       
      }
    },
    responsive: true,
    scales:{
      xAxes: [
        {
          ticks: {
           display: false,
          },
          gridLines: {
            display:false
        }
        }
      ],
      yAxes: [
        {
          ticks: {
           display: false,
          },
          gridLines: {
            display:false
        },
        
        }
      ],
    
  }
 
  };
  public lineChartColors= [
    {
      borderColor: 'rgba(254,188,59,0.1)',
      backgroundColor: 'rgba(254,188,59,0.1)',
    },
  
  ];
  public lineChartLegend = false;
  public lineChartType : ChartType='line';
  public lineChartPlugins = [ChartDataLabels ];

  constructor() { }

  ngOnInit() {
    
    var areacolor=this.areacolor
    //console.warn(areacolor)
    this.lineChartColors=[{
      borderColor: '#3c8dbc',
      backgroundColor: '#e3f0f7',
    }]
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
