import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { SelectListState } from '../../../Selectors/Supplier.selectors';
import { SelectList, SelectListInitialValue } from '../../../Actions/SelectList.actions';
import { Constants } from 'src/app/constants/constants';


@Component({
  selector: 'app-supplier-select',
  templateUrl: './supplier-select.component.html',
  styleUrls: ['./supplier-select.component.css']
})
export class SupplierSelectComponent implements OnInit {
  data: any = [];
  dataSource: any;
  result: any;
  createdArray: any = [];
  selectedRow: any;
  @ViewChild(MatPaginator, { static: true }) paginator: any;
  service: any;
  constructor(public dialog: MatDialog, private store: Store) { }
  displayedColumns: string[] = ['select', 'PartnerCode', 'CompanyName'];
  selection = new SelectionModel<any>(false, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  close() {
    this.dialog.closeAll()

  }
  update(row: any) {
    // ////console.log(row);
    this.selectedRow = row;
  }
  ngOnInit() {
    // this.getMappingDetails();
    this.store.dispatch(SelectListInitialValue())
    this.store.dispatch(SelectList({url:Constants.ALLVENDORS_API_END_URL}))
    this.service = this.store.select(SelectListState).subscribe((data: any) => {
      //console.log(data)
      if (data.selectlist) {
        if (data.selectlist.hasError) {
          //console.log("error")
        }
        else {
          this.data = data.selectlist.results
          this.data = this.data
          let keys = Object.keys(this.data);
          let values = Object.values(this.data);
          for (let i = 0; i < keys.length; i++) {
            this.result = {
              PartnerCode: keys[i],
              CompanyName: values[i]
            }
            this.createdArray.push(this.result);
          }
          this.dataSource = new MatTableDataSource<any>(this.createdArray);
      
            this.dataSource.paginator = this.paginator;
        }
      }
    })
    this.getMappingDetails1()
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {

      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  getMappingDetails1() {
    // this.store.select(getsupplierdetail).subscribe((data)=>{
    //   this.data= data
    //   this.data = this.data
    //   let keys = Object.keys(this.data);
    //   let values = Object.values(this.data);
    //   for (let i = 0; i < keys.length; i++) {
    //     this.result = {
    //       PartnerCode: keys[i],
    //       CompanyName: values[i]
    //     }
    //     this.createdArray.push(this.result);
    //   }

    //   this.dataSource = new MatTableDataSource<any>(this.createdArray);
    //   // this.dataSource = new MatTableDataSource<any>(this.data);

    //   this.dataSource.paginator = this.paginator;
    // })

  }
}
