import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';


const ELEMENT_DATA: any = [
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin removed',invoice:'got invoice'},
  {when:'Aug 17, 2021 11:25:25',who:'Admin',status:'User data changed',details:'role Manager added',invoice:'invoice paid'},
  {when:'Aug 17, 2021 11:25:25',who:'Admin',status:'User data changed',details:'role Manager removed',invoice:'invoice listed'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Manager removed',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'got invoice'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Manager removed',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'got invoice'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Admin added',invoice:'new invoice recived'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',status:'User data changed',details:'role Manager removed',invoice:'got invoice'},
]

@Component({
  selector: 'app-audit-tab',
  templateUrl: './audit-tab.component.html',
  styleUrls: ['./audit-tab.component.css']
})
export class AuditTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  audit:string="logins";
  displayedColumns: string[] = ['when','details'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
