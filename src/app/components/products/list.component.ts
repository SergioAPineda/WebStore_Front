import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ProductRepository } from "src/app/models/product.repository";

@Component({
    selector:"product-list",
    templateUrl: "list.component.html"
})

export class ListComponent{

    title = 'Product List';

    constructor(public repository: ProductRepository, private router: Router){
        repository.setProduct();
    }

    get productsList(): Product[]{
        return this.repository.getProduct();
    }

}