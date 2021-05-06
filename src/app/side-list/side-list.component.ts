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
  // @Output() clickAttente = new EventEmitter;
  // @Output() clickTraitement = new EventEmitter;
  // @Output() clickValide = new EventEmitter;
  @Output() clickEtatDes = new EventEmitter;
  @Output() clickEtatAsc = new EventEmitter;
  @Output() clickfilter = new EventEmitter();
  @Output() clickfilterCompany = new EventEmitter();

  filter;
  // filterCompany = { GAT: true, COMAR: true, AMI: true, CARTE: true, STAR: true, BIAT: true };
 filterCompany;
 
  constructor(public sharedService : SharedService) { }
  ngOnInit(): void {

  }
  onChange(){
    this.clickfilter.emit(this.filter);
  }
  onChangeCompany(){
    this.clickfilterCompany.emit(this.filterCompany);
  }

  onFilterClickAsc() {
  this.clickeDateAsc.emit();
  }
  onFilterClickDes() {
    this.clickDateDes.emit();
    }
  
    // onFilterAttente() {
    //   this.clickAttente.emit();
    // }  

    // onFilterTraitement() {
    //   this.clickTraitement.emit();
    // }

    // onFilterValideee() {
    //   this.clickValide.emit();
    // }
    onFilterClickEtatDes() {
      this.clickEtatDes.emit()
    }

    onFilterClickEtatAsc() {
      this.clickEtatAsc.emit()
    }
}
