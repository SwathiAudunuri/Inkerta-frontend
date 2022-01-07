import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label,  SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-ng2pie',
  templateUrl: './ng2pie.component.html',
  styleUrls: ['./ng2pie.component.css']
})
export class Ng2pieComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Pending', 'Approved', 'Exception'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors= [
    {
//      borderColor: ['#3c8dbc','#60af20','#dd4b39'],
      backgroundColor: ['#7c6ff1','#69d6c5','#4b9af8']
    },
    //ffbc00
  
  ];
  constructor() {
  
  }

  ngOnInit() {
  }
}
