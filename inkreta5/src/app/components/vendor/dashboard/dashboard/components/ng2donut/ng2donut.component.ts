import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-ng2donut',
  templateUrl: './ng2donut.component.html',
  styleUrls: ['./ng2donut.component.css']
})
export class Ng2donutComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Pending', 'Approved', 'Exception'];
  public doughnutChartData: MultiDataSet = [
    [350, 750,450, ],
 
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public donutChartOptions = {

    
  }
  constructor() { }

  ngOnInit() {
  }

}
