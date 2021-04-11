import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from './productservice.service';
import { Product } from './product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: Product[];
  
 isVisible : string = "no";


 @Output() showPanel = new EventEmitter();


  getUserData() {
    localStorage.setItem("isVisible", "yes");
    console.log("hello");  
    this.showPanel.emit();
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);

  }


}
