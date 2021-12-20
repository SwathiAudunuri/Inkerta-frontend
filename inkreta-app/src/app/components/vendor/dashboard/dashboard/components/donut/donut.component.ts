import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  constructor() { }
@Input() vendor:any;
  ngOnInit(): void {
  }
  series = [
    {
      "name": "DRL",
      "value": 90,
      "label": "20"
    },
    {
      "name": "Capgemini",
      "value": 80,
      "label": "70"
    },
    {
      "name": "Cera",
      "value": 40,
      "label": "10"
    }
  ];
  temp=this.series

  ngOnChanges()	{
    this.series=this.temp
    if(this.vendor){
       this.series= this.series.filter(item=>item.name===this.vendor)
     
    }
  }

  pieChartLabel(series: any[], name: string): string {
      const item = series.filter(data => data.name === name);
      if (item.length > 0) {
          return item[0].label;
      }
      return name;
  }
}
