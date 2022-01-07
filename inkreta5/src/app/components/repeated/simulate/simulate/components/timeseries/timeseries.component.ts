import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label,  } from 'ng2-charts';
import {Chart} from 'chart.js';
import * as  ChartDataLabels from 'chartjs-plugin-datalabels';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SimulateService } from '../../simulate.service';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GetCashFlow } from '../../../Actions/getcashflow.actions';
import { Constants } from 'src/app/constants/constants';


@Component({
  selector: 'app-timeseries',
  templateUrl: './timeseries.component.html',
  styleUrls: ['./timeseries.component.css']
})
export class TimeseriesComponent implements OnInit {

  Chart!: Chart;
  active:any;
  model!: NgbDateStruct;
  fromdate:any;
  todate:any;

  payables = new BehaviorSubject<any>(null)
  receivables = new BehaviorSubject<any>(null)
  receivables_duedate:any=[]
  receivables_amount:any=[]
  receivable_cal:any
  payables_duedate:any=[]
  payables_amount:any=[]
  payable_cal:any
  receivable_data:any=[]
  payable_data:any=[]
  @ViewChild('NgbdDatepicker') d!: NgbDateStruct;
  public temp: ChartDataSets[] =[]
  public lineChartData: ChartDataSets[] = [
//     { data: [6000, 1000, 3000, 1000, 6000, 5000, 3000,1000,2000,3000,4000,2000,3000], label: 'Receivable',
//     type:'line',
//     datalabels: {
//       display: false
//     }
//   },
//   { data: [3000, 4000, 2000, 4100, 3600, 3500, 6000,1000,2000,3000,4000,2000,1000], label: 'Payable' ,
//   type:'line',
//   datalabels: {
//     // align: 'top',
//     // color: 'white',
//     // backgroundColor: 'rgb(96 175 32)',
//     display: false
//   }
// },



  ];
  public lineChartLabels: Label[] = [
  
];
  public lineChartOptions :ChartOptions= {
    maintainAspectRatio: true, 
    scales:{
      xAxes: [{
          type: 'time',
					time: {
						unit: 'day',
          
						// displayFormats: {
						// 	day: 'MMM YYYY', // This is the default
						// },
					},
          ticks: {
           
           display: true,
          },
          gridLines: {
            display:true
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
          labelString: "Amount in lakhs",
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
  
  ];
  public lineChartLegend = true;
  public lineChartType : ChartType='bar';
  public lineChartPlugins = [ ];
  canvas:any
  canvases: any;
  // dateForm = new FormGroup({
  //   start_date: new FormControl('',Validators.required),
  //   end_date: new FormControl(''),
  // });
  dateForm = this.fb.group({
    start_date: ['', Validators.required],
    end_date: ['', Validators.required],

  });
  constructor(private service:SimulateService,private store:Store,private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    
    this.lineChartData=[]
    this.service.receivables1.subscribe(data=>{
   
      console.log(data)
    })
  this.getdayrange()
  this.getpayabledayrange()
 
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

    getmonthrange(){
     
  //     console.log(this.receivable_cal)
     
  //     this.receivable_cal = this.receivable_cal.reduce((acc:any, curr:any)=>{
        
  //       console.log(acc)
  //       console.log(curr)
  //       let item = acc.find((item:any )=> {
        
  //         let newDate = new Date(item[0])
  //         let newDate1 = new Date(curr[0])
          
  //         if((newDate.getMonth()===newDate1.getMonth())&&(newDate.getFullYear()===newDate1.getFullYear())){
  //           return true
  //         }
  //         else{
  //           return false
  //         }            

  //       });
  //       console.log(item)

  //       if(item){   
  //         item[1] += curr[1];
  //         console.log(item)

  //       }
  //       else{
  //         acc.push(curr)
  //       }
  //       return acc;
      
  //   },[])

  //   console.log(this.receivable_cal)
  //   this.receivables_duedate=[]
  //   this.receivables_amount=[]  
  //   this.receivable_cal.map((x:any)=>{
  //     this.receivables_duedate.push(x[0])
  //     this.receivables_amount.push(x[1])
  //   })
  //   this.lineChartLabels.push(this.receivables_duedate)
  //   var d= { data:this.receivables_amount , label: 'Receivable',
  //   type:'line',    
  //   datalabels: {
  //     display: false
  //   }
  // }
  // this.lineChartData=[]
  //     this.lineChartData.map(data=>{
  //     data.data=this.receivables_amount 
  //     })
  //     console.log(this.lineChartData)

  //     this.lineChartData=[
  //       { data:this.receivables_amount , label: 'Receivable',
  //   type:'line',
  //   datalabels: {
  //     display: false
  //   }
  // }
  //     ]
  //     console.log(this.lineChartData)
      this.active="active"  
    this.lineChartOptions = {
        maintainAspectRatio: true, 
        scales:{
          xAxes: [{
              type: 'time',
              time: {
                unit: 'month',
              
                // displayFormats: {
                // 	day: 'MMM YYYY', // This is the default
                // },
              },
              ticks: {
               min:'2021-08-01 ',
              // max:'2019-12-01 00:01:01',
               display: true,
              },
              gridLines: {
                display:true
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

    } 
    getdayrange(){
      this.lineChartData=[]

      this.service.receivables.subscribe(data=>{
        if(data){
        data.sort((val1:any, val2:any)=> {
     
          return <any>new Date(val1.invoice_duedate) - <any>new Date(val2.invoice_duedate);
        })
        this.receivables.next(data)
      }
      })
      this.receivables.subscribe(data=>{
        this.lineChartData=[]
        console.log(data)
        if(data!=null){
          var due_date_balance=  data.map((x:any)=>{
            
            
            return [x.invoice_duedate,x.balance]
          })
          console.log(due_date_balance)
          var i=0
          this.receivable_cal = due_date_balance.reduce((acc:any, curr:any)=>{
          
            console.log(acc)
            console.log(curr)
            let item = acc.find((item:any )=> item[0] === curr[0]);
            console.log(item)
  
            if(item){ 
              item[1] += curr[1];
              console.log(i++)
              console.log(item)
  
            }
            else{
              acc.push(curr)
            }
            return acc;
          
        },[])
        this.receivables_duedate=[]
        this.receivables_amount=[]
        this.receivable_cal.map((x:any)=>{
          this.receivables_duedate.push(x[0])
          this.receivables_amount.push(x[1])
        })

        console.log(this.receivables_duedate.length)
        this.receivable_data=[]
        for(i=0;i<this.receivables_amount.length;i++){
          const  obj={x:this.receivables_duedate[i],y:this.receivables_amount[i]}
          this.receivable_data.push(obj)
        }
        console.log(this.receivable_data)
        this.lineChartLabels=[]
      
        //this.lineChartLabels=this.receivables_duedate
        console.log(this.receivables_amount)
      
       var d= { data:this.receivable_data , label: 'Receivable',
      type:'line',
      datalabels: {
        display: false
      }
    }
        this.lineChartData.push(d)
        this.lineChartData.push(
          { data: this.payable_data, label: 'Payable',
            type:'line',
            datalabels: {
            display: false
          }
        })
        this.lineChartColors.push({borderColor:"#008ffb",})

        this.lineChartColors.push({borderColor:"#ffa1b5",})
       
        
        
      }
  
      })
      this.active="active"
      this.lineChartOptions = {
        maintainAspectRatio: true, 
        scales:{
          xAxes: [{
              type: 'time',
              time: {
                unit: 'day',
              
                // displayFormats: {
                // 	day: 'MMM YYYY', // This is the default
                // },
              },
              ticks: {
               min:'2021-08-01',
               max:'2022-01-07',
               display: true,
           },
              gridLines: {
                display:true
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
    }
    onSubmit(){
      console.warn("in submit")
      this.lineChartOptions = {
        maintainAspectRatio: true, 
        scales:{
          xAxes: [{
              type: 'time',
              time: {
                unit: 'day',
              
                // displayFormats: {
                // 	day: 'MMM YYYY', // This is the default
                // },
              },
              ticks: {
               min:'2021-10-01',
               max:'2021-12-01',
               display: true,
           },
              gridLines: {
                display:true
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
              labelString: "Amount in lakhs",
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
      console.warn(this.lineChartOptions)
      console.warn(this.dateForm.value.start_date)
      this.store.dispatch(GetCashFlow({url:Constants.GetCashFlow,data:this.dateForm.value}))
    }
    getpayabledayrange(){

      this.service.payables.subscribe(data=>{
        if(data){
        data.sort((val1:any, val2:any)=> {
         
     
          return <any>new Date(val1.invoice_duedate) - <any>new Date(val2.invoice_duedate);
        })
        this.payables.next(data)
      }
      })
      this.payables.subscribe(data=>{

      var temp=this.lineChartData[0]
        // this.lineChartData=[]
         
        console.log(data)
        if(data!=null){
          var due_date_balance=  data.map((x:any)=>{
            
            
            return [x.invoice_duedate,x.balance]
          })
          console.log(due_date_balance)
          var i=0
          this.payable_cal = due_date_balance.reduce((acc:any, curr:any)=>{
          
            console.log(acc)
            console.log(curr)
            let item = acc.find((item:any )=> item[0] === curr[0]);
            console.log(item)
  
            if(item){ 
              item[1] += curr[1];
              console.log(i++)
              console.log(item)
  
            }
            else{
              acc.push(curr)
            }
            return acc;
          
        },[])
 
        this.payables_duedate=[]
        this.payables_amount=[]
        this.payable_cal.map((x:any)=>{
          this.payables_duedate.push(x[0])
          this.payables_amount.push(x[1])
        })
        this.lineChartData=[]
        this.payable_data=[]
        for(i=0;i<this.payables_amount.length;i++){
          const  obj={x:this.payables_duedate[i],y:this.payables_amount[i]}
          this.payable_data.push(obj)
        }
        this.lineChartData.push(
          { data: this.receivable_data, label: 'Receivable',
            type:'line',
            datalabels: {
            display: false
          }
        })
        // this.lineChartLabels=[]
         this.lineChartLabels.push(this.payables_duedate)
         console.log(this.lineChartLabels)
       var d= { data:this.payable_data , label: 'Payable',
      type:'line',
      datalabels: {
        display: false
      }
    } 
      this.lineChartData.push(d)
      console.log(this.lineChartData)
    
      //  var label1= this.lineChartColors.pop()
        this.lineChartColors.push({borderColor:"#ffa1b5",})
      //   this.lineChartData.push(this.temp[0])
        console.log(this.lineChartData)
        console.log(this.temp[0])
       
       
        this.lineChartOptions = {
          maintainAspectRatio: true, 
          scales:{
            xAxes: [{
                type: 'time',
                time: {
                  unit: 'day',
                
                  // displayFormats: {
                  // 	day: 'MMM YYYY', // This is the default
                  // },
                },
                ticks: {
                 min:'2021-08-01',
                 max:'2022-01-07',
                 display: true,
                },
                gridLines: {
                  display:true
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
        
      }
  
      })
      this.active="active"
    
    }
}
