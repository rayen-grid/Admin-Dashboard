import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.css']
})
export class SideListComponent implements OnInit {
  @Output() clickeDateAsc = new EventEmitter;
  @Output() clickDateDes = new EventEmitter;
  @Output() clickAttente = new EventEmitter;

  constructor(public sharedService : SharedService) { }
  ngOnInit(): void {
  }
  
  onFilterClickAsc() {
  this.clickeDateAsc.emit();
  }
  onFilterClickDes() {
    this.clickDateDes.emit();
    }
  
    onFilterAttente() {
      this.clickAttente.emit();
    }  

}
