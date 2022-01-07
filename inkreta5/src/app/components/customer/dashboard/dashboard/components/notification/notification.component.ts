import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



const feeds = [
  {
    "id":1,
    "Details": "The invoice no: #I12345 was successfully received.",
    "entity": "Invoice",
    "Date":"06-05-2021",
    "Routing_component":"Invoice.js",
    "actions":[
      {"action":"Update Status"},
      {"action":"Update Due date"}
    ]
  },
  {
    "id":2,
    "Details": "The remit-to information is missing or incomplete for the Invoice #45678.",
    // You are requested to provide remit-to information and resubmit the invoice",
    "entity": "Query",
    "Date":"06-05-2021",
    "Routing_component":"Invoice.js",
    "actions":[
      {"action":"Mark as Read"},
    ]
  },
  {
    "id":3,
    "Details": "Submit Quarterly Invoice to DRL is overdue",
    "entity": "Task",
    "Date":"06-05-2021",
    "Routing_component":"Task.js",
  },
  {
    "id":4,
    "Details": "I hope you’re well! We’re yet to receive payment for invoice no:123 ",
    "entity": "Invoice",
    "Date":"06-05-2021",
    "Routing_component":"Invoice.js",
    "actions":[
      {"action":"Update Status"},
      {"action":"Update Due date"}
    ]

  },
  {
      "id":5,
      "Details": " Changes have been made in Invoice 523 ",
      "entity": "Query",
      "Date":"05-05-2021",
      "Routing_component":"Query.js",
      "actions":[
        {"action":"Mark as Read"},
      
      ]
  },
  {
    "id":6,
    "Details": "Please follow up with Sending a Mail",
    "entity": "Task",
    "Date":"05-05-2021",
    "Routing_component":"Task.js",

  },
  {
      "id":7,
      "Details": "I hope you’re well! We’re yet to receive payment for invoice no:125",
      "entity": "Invoice",
      "Routing_component":"Invoice.js",
      "Date":"05-05-2021",
      "actions":[
        {"action":"Mark as Read"},
        {"action":"Update Due date"}
      ]

  },
  {
      "id":8,
      "Details": "Invoice 125 is further processed",
      "entity": "Query",
      "Routing_component":"Query.js",
      "Date":"05-05-2021",
      "actions":[
        {"action":"Mark as Read"},
      ]
      

  },
  {
    "id":9,
    "Details": "Please follow up with Late Invoice ",
    "entity": "Task",
    "Date":"04-05-2021",
    "Routing_component":"Task.js",

  },
  {
      "id":10,
      "Details": "I hope you’re well! We’re yet to receive payment for invoice no:127",
      "entity": "Invoice",
      "Routing_component":"Invoice.js",
      "Date":"04-05-2021",
      "actions":[
        {"action":"Update Status"},
        {"action":"Update Due date"}
      ]

  }, 
  {
    "id":11,
      "Details": "you have 10% balance",
      "entity": "Invoice",
      "Routing_component":"Invoice.js",
      "Date":"04-05-2021",
      "actions":[
        {"action":"Update Status"},
        {"action":"Update Due date"}
      ]


  },
 
  {
    "id":12,
    "Details": "The remit-to information is missing or incomplete for the Invoice #1234.You are requested to provide remit-to information and resubmit the invoice",
    "entity": "Query",
    "Date":"03-05-2021",
    "Routing_component":"Invoice.js",
    "actions":[
      {"action":"Mark as Read"},
    ]
  },
  {
    "id":13,
    "Details": "The invoice no: 57845 was successfully received.",
    "entity": "Invoice",
    "Date":"03-05-2021",
    "Routing_component":"Invoice.js",
    "actions":[
      {"action":"Update Status"},
      {"action":"Update Due date"}
    ]
  },
  {
    "id":14,
    "Details": "Submit Quarterly Invoice to DRL is overdue",
    "entity": "Task",
    "Date":"03-05-2021",
    "Routing_component":"Task.js",
  },
  {
    "id":15,
    "Details": "I hope you’re well! We’re yet to receive payment for invoice no:578 ",
    "entity": "Invoice",
    "Date":"03-05-2021",
    "Routing_component":"Invoice.js",
    "actions":[
      {"action":"Update Status"},
      {"action":"Update Due date"}
    ]

  },
  {
    "id":16,
    "Details": " Changes have been made in Invoice 527 ",
    "entity": "Query",
    "Date":"02-05-2021",
    "Routing_component":"Query.js",
    "actions":[
      {"action":"Mark as Read"},
    
    ]
},
{
  "id":17,
  "Details": "Invoice #9765432 was rejected ",
  "entity": "Invoice",
  "Date":"01-05-2021",
  "Routing_component":"Invoice.js",
  "actions":[
    {"action":"Update Status"},
    {"action":"Update Due date"}
  ]

},
]
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private _router: Router) { }
  feeds=feeds
  p: number = 1;

  ngOnInit(): void {
  }
  nav_inbox(){
   
    this._router.navigate(['/app/customer_manager/inbox'])
    
  }

}
