import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { SupplierList } from '../../../Actions/SupplierList.actions';
import { SupplierListState } from '../../../Selectors/Supplier.selectors';
import { SupplierService } from '../../supplier-mapping.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.css']
})
export class SupplierTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator:any;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['description', 'SupplierPartnerId','status','action'];
  // dataSource = ELEMENT_DATA;
  dataSource:any=[];
  service: any;
  constructor(private store:Store,public supplierservice:SupplierService) { }

  ngOnInit(){
    this.store.dispatch(SupplierList({url:Constants.VENDORS_API_END_URL}))
    this.service = this.store.select(SupplierListState).subscribe((data)=>{
      //console.log(data)
      if(data.suppliers){
        if(data.suppliers.hasError){
          //console.log("error")
        }
        else{
          this.dataSource =new MatTableDataSource<any>(data.suppliers.results);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }

        if(data.suppliers.results.length === 0){
          this.supplierservice.error.next(true)
        }
        else{
          this.supplierservice.error.next(false)
        }
      }
      
    })
  }
  update_row(value:any,index:any){
    // this.userId=value.userId
    // //console.log(value.userId)
    // this.userservice.userId.next(value.userId)
  }
  sidenav(){
    this.supplierservice.sidenav.next(true)
  }
  ngOnDestroy(){
    this.service.unsubscribe()
  }

}
