import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.css']
})
export class SideListComponent implements OnInit {

  constructor() { }
isVisible : string;
  ngOnInit(): void {
    this.isVisible = localStorage.getItem("isVisible")
  }
  


}
