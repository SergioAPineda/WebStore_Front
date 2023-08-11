import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Product, Owner } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";

@Component({
    selector: "product-details",
    templateUrl: "productDetail.component.html"
})

export class ProductDetailComponent {

    title = "Product Details";
    item: Product = new Product();

    constructor(private repository: ProductRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    {   
        this.showDetails(activeRoute.snapshot.params["id"]);
    }
    
    private showDetails(id: string){
        console.log("show Details")
        this.item = this.repository.getItem(id);
        console.log(this.item.name)
        this.router.navigateByUrl(`prod/details/${this.item._id}`);
 
    }
}