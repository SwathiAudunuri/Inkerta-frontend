import { Component, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendorserviceService } from '../../vendorservice.service';
// const ELEMENT_DATA: any = [
//   {actionOn:'Aug 24, 2021 11:25:23',actionBy:'Admin',action:'Vendor updated'},
//   {actionOn:'Aug 20, 2021 11:25:23',actionBy:'Admin',action:'Vendor details updated'},
//   {actionOn:'Aug 19, 2021 11:25:25',actionBy:'Admin',action:'Vendor added'},
//   {actionOn:'Aug 17, 2021 11:25:25',actionBy:'Admin',action:'Vendor changed'}
// ]
@Component({
  selector: 'app-vendormappingaudit',
  templateUrl: './vendormappingaudit.component.html',
  styleUrls: ['./vendormappingaudit.component.css']
})
export class VendormappingauditComponent implements OnInit {
  @Input() description:any;
  @Input() public mappingId:any;
  temp: any;
  dataSource: any;
  displayedColumns: string[] = ['actionOn', 'actionBy','actionComments'];
  @ViewChild(MatPaginator, { static: false }) paginator = []
  searchKey: string = ""
  @ViewChild(MatSort) sort: MatSort[] = [];
  rowindex: any;
  constructor(private serviceProvider: VendorserviceService,private http: VendorserviceService ) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    const newNumberChange : SimpleChange = changes.mappingId;
    ////console.log(" current value",newNumberChange.currentValue)
    this.mappingId=this.rowindex
    this.getAuditList(newNumberChange.currentValue)
  }
  getAuditList(value:any) {
    ////console.log(this.mappingId)
    // ////console.log(this.id)
    if(this.mappingId!==""){
      ////console.log(value)
    // ////console.log(this.id)
    this.serviceProvider.getDetailsAudit(value).subscribe(res => {
      ////console.log(res)
      this.temp = res
      ////console.log(this.temp)
      ////console.log(this.temp.results)
      ////console.log(this.temp.results.vendorMappingActivities)
      this.dataSource = new MatTableDataSource<any>(this.temp.results.vendorMappingActivities);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
}
  // displayedColumns: string[] = ['actionOn','actionBy','action'];
  // dataSource=ELEMENT_DATA;
// }
