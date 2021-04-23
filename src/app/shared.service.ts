import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() showPanel = new EventEmitter();
 display : boolean = false;
  public onPress() {
    this.display = !this.display;
    console.log(this.display);
    this.showPanel.emit();
    
   
  }
  constructor() { }
  

  public filterDateAsc(products) : any {
   return products =  products.sort((a, b) =>(this.convert(a.date_sin) > this.convert(b.date_sin) ? 1 : -1))
    
  }

  public filterDateDes(products) : any {
    return products =  products.sort((a, b) =>(this.convert(a.date_sin) > this.convert(b.date_sin) ? -1 : 1))
     
   }
   public filterAttente (products) {
   return products.filter(el => {
     return el.etat_dossier === "En attente de confirmation"})
   }

  public convert(str) {
    let dateObj = {
         "Jan" : 1,
         "Feb" : 2,
         "Mar" : 3,
         "Apr" : 4,
         "May" : 5,
         "Jun" : 6,
         "Jul" : 7,
         "Aug" : 8,
         "Sep" : 9,
         "Oct" : 10,
         "Nov" : 11,
         "Dec" : 12
    }
    
    let converted = 0;

   let year = str.slice(str.length - 5, str.length);
   let day = parseInt(str[5]) == NaN ? str[4] : str[4] + str[5];
   let month = dateObj[str.slice(0, 3)];
   converted = new Date(year + '-' + month + '-' + day).getTime();
   return converted;
   
}
}
