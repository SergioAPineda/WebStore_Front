import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ProductRepository } from "src/app/models/product.repository";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html'
})

export class IndexComponent{
    title = 'Home'

    constructor(public repository: ProductRepository, private router: Router){
        repository.setProduct();
    }

    get productsList(): Product[]{
        return this.repository.getProduct();
    
    }
}