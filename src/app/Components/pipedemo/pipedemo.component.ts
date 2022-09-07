import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  employee = {
    name:"Varun",
    BasedSalary:50000,
    JoinedOn:Date.now,
    Qualification:"Btech"


  }

  constructor() { }

  ngOnInit(): void {
  }

}
