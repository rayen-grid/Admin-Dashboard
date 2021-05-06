import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProductService } from '../table/productservice.service';
import { Product } from '../table/product';



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

  products: Product[] = [];
  productsPrime : any = [];
 
  
  constructor(public productService: ProductService, public sharedService : SharedService) { }

  ngOnInit(): void {
    console.log(this.sharedService.display);
   
      this.productService.getProductsSmall().then(data => {
        this.products = data
        this.productsPrime =  this.products;
      console.log(this.productsPrime,this.products)
      })
      
  
  }

}
