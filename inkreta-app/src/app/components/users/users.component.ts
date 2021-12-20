import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularTreeGridComponent } from 'angular-tree-grid';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private iframe:ElementRef) { }

  ngOnInit(): void {
  }
  @ViewChild('angularGrid') angularGrid:any


  data: any = [
    { id: 1, name: 'Bimal', age: 60, weight: 60, gender: 1, phone: 7930343463, parent: 0},
    { id: 2, name: 'Bhagi', age: 40, weight: 95, gender: 1, phone: 7930343463, parent: 1},
    { id: 3, name: 'Kalyana', age: 36, weight: 105, gender: 1, phone: 7930343463, parent: 1},
    { id: 4, name: 'Prakash', age: 20, weight: 20, gender: 1, phone: 7930343463, parent: 2},
    { id: 5, name: 'Jitu', age: 21, weight: 61, gender: 1, phone: 7930343463, parent: 3},
    { id: 6, name: 'Sunil', age: 60, weight: 87, gender: 1, phone: 7930343463, parent: 34},
    { id: 7, name: 'Tadit', age: 40, weight: 60, gender: 1, phone: 7930343463, parent: 6},
    { id: 8, name: 'Suraj', age: 36, weight: 60, gender: 1, phone: 7930343463, parent: 6},
    { id: 9, name: 'Swarup', age: 20, weight: 40, gender: 1, phone: 7930343463, parent: 8},
    { id: 10, name: 'Lakin', age: 21, weight: 55, gender: 1, phone: 7930343463, parent: 8},
  ];
  configs: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        width: '100px'
      },
      {
        name: 'age',
        header: 'Age',
        renderer: function(value:any) {
          return value + ' years';
        }
      },
      {
        name: 'weight',
        header: 'Weight'
      },
      {
        name: 'gender',
        header: 'Gender',
        renderer: function(value:any) {
          return value ? 'Male' : 'Female';
        }
      },
      {
        name: 'phone',
        header: 'Phone'
      }
    ]
  }
  //@ViewChild('iframe') iframe: any;
//  @ViewChild('iframe', { static: true }) MyDOMElement: ElementRef;

  gistUrl: String = "https://gist.github.com/debabratapatra/45295b5a7c8167202ab927aeeb6325c7.js";

  ngAfterViewInit() {
    const iframe1:ElementRef=this.iframe
    const item = document.querySelector("iframe")
    console.log(this.iframe.nativeElement)
    const doc = this.iframe.nativeElement|| this.iframe.nativeElement.contentElement
      
    const content = `
          <html>
          <head>
            <base target="_parent">
          </head>
          <body>
          <script type="text/javascript" src="${this.gistUrl}"></script>
          </body>
        </html>
      `;
    //  doc.open();
     // doc.write(content);
     // doc.close();
  }

  collapseAll() {
    const temp:AngularTreeGridComponent=this.angularGrid
    temp.collapseAll();
  }

  expandAll() {
    const temp:AngularTreeGridComponent=this.angularGrid

    temp.expandAll();
  } 
}
