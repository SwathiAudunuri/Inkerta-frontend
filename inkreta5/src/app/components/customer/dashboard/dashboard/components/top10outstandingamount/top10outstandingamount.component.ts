import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors } from 'ng2-charts';
import { NgxSpinnerService } from 'ngx-spinner';
import { gettoptenvendors, nulltoptenvendors } from '../../../Actions/top10.action';
import { gettoptenvendorsState } from '../../../Selectors/dashboard.selector';

@Component({
  selector: 'app-top10outstandingamount',
  templateUrl: './top10outstandingamount.component.html',
  styleUrls: ['./top10outstandingamount.component.css']
})
export class Top10outstandingamountComponent implements OnInit {
  temp:any
  public barChartOptions: ChartOptions = {
    responsiveAnimationDuration:7000,
    animation:{
      easing:'linear',
      duration:3000,
      animateRotate:true,
      animateScale:true
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
        scaleLabel: {
          display: true,
          labelString: "Customers",
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
          labelString: "Outstanding Amount",
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
    // { data: [90000, 88000, 86000,84000,80000,78000,76000,72000,72000,62000,], label: 'Top 15 Customers with High Outstanding Amount', stack: 'a' , barPercentage: 1,barThickness: 18,
    // datalabels: {
      // align: 'top',
      // color: 'white',
      // backgroundColor: '#3c8dbc',
      // display: false
  //   }
  // },
   
  ];
  public barChartLabels: string[] = [
    //'appollo', 'reddyslabs', 'ramya pvt ltd','dell','apollo tubes',
      //                                'kims hospitals','yashoda','kamineni','ultratech','burger king',
                                      ];
  public barChartColors: Colors[] = [
    {
      borderColor:"#f39c128a",
      backgroundColor:'#f39c128a'


//      backgroundColor:'#3c8dbc',#fafabe
    //backgroundColor:'rgb(59 ,130, 236)'
      //backgroundColor: '#febc3b',
    },
    {
      backgroundColor:'#f39c128a'
    }
  
  ];
  loaded: boolean=false;
  msg: string='null';
  constructor(private store:Store,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.store.dispatch(nulltoptenvendors())
    this.store.dispatch(gettoptenvendors())

    this.getData()
  }
getData(){
  this.store.select(gettoptenvendorsState).subscribe((data1:any)=>{
   
    
    if(data1?.result){
      if(data1?.result?.hasError){
        this.loaded=true
        this.msg=data1?.result?.errors?.errorMessage
      }
      else{
        if(data1?.result?.results){
          //console.log(data1?.result?.results)
          this.barChartData=[{data:  data1?.result?.results?.totals,
            label: 'Top  Customers with High Outstanding Amount',
             stack: 'a' , barPercentage: 1,barThickness: 18,
          
          },]
          this.barChartLabels=data1?.result?.results?.companies
          setTimeout(() => {
            this.loaded=true
          }, 1000);
          this.msg='null';
        }
        else{
          this.msg="There are no payable invoices"
          setTimeout(() => {
            this.loaded=true
          }, 1000);
        }
        
      }
    }
   
    // //console.log(this.temp.results)
    
    // if(!data1.hasError){
    //   //console.log(data1)
    //   this.barChartData=[{data:  data1.result.results.totals}]
    //   this.barChartLabels=data1.result.results.companies
    //   //console.warn(this.barChartData)
    //   //console.warn(this.barChartLabels)
    //   this.loaded=true
  
    // }
  })
}  

}
