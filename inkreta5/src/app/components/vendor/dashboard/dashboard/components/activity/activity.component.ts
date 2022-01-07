import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getcompanyactivities, nullcompanyactivities,  } from '../../../Actions/companyactivities.action';
import { getCompanyActivityReducer } from '../../../Reducers/getcompanyactivity.reducer';
import { getcompanyactivityState } from '../../../Selectors/dashboard.selector';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  service1: any;
  data1: any;
  data2:any=[];
  previous=[]
  constructor(private store:Store,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.store.dispatch(nullcompanyactivities())
    this.store.dispatch(getcompanyactivities({id:id}))
    this.getData()
  }
  getData(){
    this.service1 = this.store.select(getcompanyactivityState).subscribe((data:any)=>{
      console.log(data)
      if(data?.result){
        console.log(data)
          if(data?.result?.hasError){

          }
          else{
          this.data1=data?.result?.results
          this.data1.map((item:any)=>{ 
            var date = new Date(item.activity_date);
            var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];

            const month = monthNames[date.getMonth()]
            const year = date.getFullYear()
            const monthyear= month + ' ' + year
            const obj={[monthyear]:[item]}
            console.warn(item)
            const ob=Object.assign({item}, {monthyear: monthyear})
            console.warn(ob)
           // item=Object.assign(item, ob);
          this.data2.push(ob)

          })
          console.log(this.data1)  
          console.log(Object.keys(this.data2[0])[0])
          console.log(this.data2[0].item)  

          const data3=[];
          // this.data2=this.data2.reduce((previousValue:any, currentValue:any)=>{
          //     const prev=Object.keys(previousValue)
          //     const curr=Object.keys(currentValue)
          //     console.warn(prev[0])
          //     console.warn(curr[0])
          //    if(prev[0]===curr[0]){
          //      console.warn(Object.keys(previousValue))
          //      console.warn( Object.keys(currentValue))

          //      var temp=previousValue
          //      const item=String(prev[0])
          //       temp[item]=[]
          //      temp[item].push(currentValue[item])
          //      temp[item].push(previousValue[item])
          //      previousValue=temp    
          //      console.warn(temp[item])
          //      console.warn(temp)
          //      // return previousValue +  currentValue
          //    }
          // })
          console.log(this.data1[0].activity_date)
         
          //console.log(data?.result?.results)
         
          }
      }

    })
  }

}
