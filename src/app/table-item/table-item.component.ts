import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  elements: any = [
    {first: '1111111'},
    {first: '2222222'},
    {first: '3333333'},
    
  ];
  headElements = ['sdqt'];


 
  
  constructor(public sharedService : SharedService) { }

  ngOnInit(): void {
    console.log(this.sharedService.display);
    
  }

}
