import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 13000
    },
    {
      "Id": 2,
      "Name": "Eros Villa",
      "Type": "House",
      "Price": 13000
    },
    {
      "Id": 3,
      "Name": "Birla House",
      "Type": "House",
      "Price": 13000
    },
    {
      "Id": 4,
      "Name": "Birla House",
      "Type": "House",
      "Price": 11400
    },
    {
      "Id": 5,
      "Name": "Macro Home",
      "Type": "House",
      "Price": 14300
    },
    {
      "Id": 1,
      "Name": "Pearl White House",
      "Type": "House",
      "Price": 18000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
