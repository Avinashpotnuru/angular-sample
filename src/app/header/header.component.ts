import { Component, Input } from '@angular/core';
import { TestService } from '../test.service';
import { ProductsService } from '../products.service';
ProductsService


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  data=["home","skills","about"]
  @Input() cName?:string
  constructor( public mobiles:TestService, public product:ProductsService){
    
  }
productsArray:any=null
  mobileData=this.mobiles.mobilesData
  productsData=this.product.getProducts().subscribe((data)=>{


    this.productsArray=data
    console.log(data)
  }
  )

 

  



   

}
