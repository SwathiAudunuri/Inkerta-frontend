import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css']
})
export class TreemapComponent implements OnInit {

  @Output() filterByVendor :EventEmitter<any>=new EventEmitter()

  ngOnInit(): void {
  }

  
  single = [
    {
      "name": "DRL",
      "value": 8940000,
      "as": 8940000
    },
    {
      "name": "Capgemini",
      "value": 5000000
    },
    {
      "name": "Attra",
      "value": 7200000
    },
    {
      "name": "tecnics",
      "value": 4500000
    },
    {
      "name": "Vardhaman",
      "value": 5730000
    },{
      "name": "Cera",
      "value": 8200000
    }
  ];
  view: any = [1000, 400];

  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    // Object.assign(this, { single });
  }

  onSelect(event:any) {
    //console.log(event);
    this.filterByVendor.emit(event)
  }

  labelFormatting(c:any) {
    return `${(c.label)}  Outsanding Amount`;
  }
}
