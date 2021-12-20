import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-ngxlinechart',
  templateUrl: './ngxlinechart.component.html',
  styleUrls: ['./ngxlinechart.component.css']
})
export class NgxlinechartComponent implements OnInit {

  @Input()  yAxisLabel:any;
  @Output()  findByVendor:EventEmitter<any>=new EventEmitter(); 
  @Input() vendors:any;
  ngOnInit(): void {
  }
  single = [
    {
      "name": "mahindra",
      "series": [
        {
          "name": "august",
          "value": "15000"
        },
        {
          "name": "september",
          "value": "20000"
        },
        {
          "name": "october",
          "value": "25000"
        },
        {
          "name": "november",
          "value": "30000"
        }
      ],
    },
    {
      "name": "tecnics",
      "series": [
        {
          "name": "august",
          "value": "4000"
        },
        {
          "name": "september",
          "value": "4500"
        },
        {
          "name": "october",
          "value": "10000"
        },
        {
          "name": "november",
          "value": "15000"
        }
      ],
    },
    {
      "name": "DRL",
      "series": [
        {
          "name": "august",
          "value": "5000"
        },
        {
          "name": "september",
          "value": "8000"
        },
        {
          "name": "october",
          "value": "15000"
        },
        {
          "name": "november",
          "value": "35000"
        }
      ],
    }
  
  ];
  temp=this.single
  public view: any = [1300, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
   public xAxisLabel= "2021";
  public showYAxisLabel = true;
  //  public yAxisLabel= "Disputes";
  // public graphDataChart: any[];
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
   constructor() {
  }
  onSelect($event:any){
    console.log($event)
     this.findByVendor.emit($event)
  }
  ngOnChanges()	
{
  this.single=this.temp
  if(this.vendors){
    this.single=this.single.filter(item=>item.name===this.vendors)
  }
}
}
