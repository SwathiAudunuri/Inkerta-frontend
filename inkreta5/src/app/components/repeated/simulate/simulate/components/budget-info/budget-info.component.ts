import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-info',
  templateUrl: './budget-info.component.html',
  styleUrls: ['./budget-info.component.css']
})
export class BudgetInfoComponent implements OnInit {
  createbudget: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  open_createbudget(){
    this.createbudget = true
  }
}
