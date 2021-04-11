import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  etat: string[] = ['En attente de confirmation', 'En cours de traitement', 'Validé'];

  clientNames: string[] = [
      "General Kenobi"
     
    ];
  constructor(private http: HttpClient) { }
  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
}

getProducts() {
    return this.http.get<any>('assets/products.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
}

getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/products-orders-small.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
}

generatePrduct(): any {
    const product: Product =  {
        id: this.generateId(),
        name: this.generateName(),
        // description: "Product Description",
        num_dossier: this.generateNumdossier(),
        // category: "Product Category",
        etat_dossier: this.generateEtatdoss(),
    };

    // product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
    // return product;
}



generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#";
    
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    return text;
}

generateName() {
    return this.clientNames[Math.floor(Math.random() * Math.floor(30))];
}

generateDatesin() {
    return Math.floor(Math.random() * Math.floor(299)+1);
}

generateNumdossier() {
    return Math.floor(Math.random() * Math.floor(75)+1);
}

generateEtatdoss() {
    return this.etat[Math.floor(Math.random() * Math.floor(3))];
}



}
