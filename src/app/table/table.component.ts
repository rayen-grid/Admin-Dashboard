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
  productsPrime : any = [];

  constructor(private productService: ProductService, public sharedService : SharedService) { }
  
  onItemClick() {
    this.sharedService.onPress();
  }
  
 
  
   ngOnInit() {
      this.productService.getProductsSmall().then(data => {
        this.products = data
        this.productsPrime =  this.products;
      console.log(this.productsPrime,this.products)
      })
      
  }

filterAsc(e) {
  this.productsPrime = this.sharedService.filterDateAsc(this.productsPrime)
  
}
filterDes(e) {
  this.productsPrime = this.sharedService.filterDateDes(this.productsPrime)
  
}

filterEtaDes(e) {
  this.products = this.sharedService.filterEtatDes(this.products)
  
}

filterEtaAsc(e) {
  this.products = this.sharedService.filterEtatAsc(this.products)
  
}
filterChange(e) {
this.productsPrime=this.products.filter(el=>{
  if(e==="validé")
    return el.etat_dossier==="Validé"
  if(e==="traitement")
  return el.etat_dossier==="En cours de traitement"
  return el.etat_dossier==="En attente de confirmation"

})
console.log(this.productsPrime,)
}

filterChangeCompany(e) {
  this.productsPrime=this.products.filter(el=>{
    if(e==="GAT") 
      return el.companie==="GAT"                              
     else if(e==="COMAR")
      return el.companie==="COMAR"
     else if(e==="CARTE")
      return el.companie==="CARTE"
     else if(e==="AMI")
       return el.companie==="AMI"
     else if(e==="BIAT")
       return el.companie==="BIAT"
    else return el.companie==="STAR"
  
  })
  console.log(this.productsPrime)
  }


// filterAttenteDeConfirmation(e) {
//   this.productsPrime = this.products;
//    this.productsPrime = this.sharedService.filterAttente(this.products)
//    console.log("hhhh",this.productsPrime);

// }

// filterEnCoursTraitement(e) {
//   this.productsPrime = this.products;
//   this.productsPrime = this.sharedService.filterTraitement(this.products)
//   console.log(this.productsPrime);

// }

// filterValidee(e) {
//   this.productsPrime = this.products;
//   this.productsPrime = this.sharedService.filterValide(this.products)
//   console.log(this.productsPrime);
  
// }



}
