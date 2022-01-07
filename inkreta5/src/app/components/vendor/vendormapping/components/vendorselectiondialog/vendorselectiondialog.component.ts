import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { VendorserviceService } from '../../vendorservice.service';
import { MatPaginator } from '@angular/material/paginator';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

@Component({
  selector: 'app-vendorselectiondialog',
  templateUrl: './vendorselectiondialog.component.html',
  styleUrls: ['./vendorselectiondialog.component.css']
})
export class VendorselectiondialogComponent implements OnInit {
  data: any = [];
  dataSource: any;
  result: any;
  createdArray: any = [];
  selectedRow:any;
  @ViewChild(MatPaginator, {static: true}) paginator:any;
  constructor(public dialog: MatDialog, private serviceProvider: VendorserviceService) { }
  displayedColumns: string[] = ['select', 'PartnerCode', 'CompanyName'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<any>(false, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  close(){
    this.dialog.closeAll()
    
  }
  update(row: any) {
    // //console.log(row);
    this.selectedRow=row;
  }
  ngOnInit(): void {
    this.getMappingDetails();
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

  getMappingDetails() {
    // //console.log(this.token.results.securityToken);

    this.serviceProvider.getVendorDetails().subscribe(res => {
      this.data = res
      this.data = this.data.results
      //this.dataSource=this.data
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
      // this.dataSource = new MatTableDataSource<any>(this.data);

      this.dataSource.paginator = this.paginator;

      //console.log(this.createdArray);
    })

  }
}
