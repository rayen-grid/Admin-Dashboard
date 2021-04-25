import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice.service';
import { Product } from './product';
import {SharedService} from '../shared.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: Product[] = [];
  productsPrime : Product[] = [];


  constructor(private productService: ProductService, public sharedService : SharedService) { }
  
  onItemClick() {
    this.sharedService.onPress();
  }

   ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data)
      this.productsPrime =  [...this.products];
  }

filterAsc(e) {
  this.products = this.sharedService.filterDateAsc(this.products)
  
}
filterDes(e) {
  this.products = this.sharedService.filterDateDes(this.products)
  
}

filterAttenteDeConfirmation(e) {
  this.productsPrime = this.products;
  this.products = this.sharedService.filterAttente(this.products)
  console.log(this.productsPrime);
  
}


filterEnCoursTraitement(e) {
  this.productsPrime = this.products;
  this.products = this.sharedService.filterTraitement(this.products)
  console.log(this.products);
  
}


filterValidee(e) {
  this.productsPrime = this.products;
  this.products = this.sharedService.filterValide(this.products)
  console.log(this.products);
  
}



}
