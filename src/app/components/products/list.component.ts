import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ProductRepository } from "src/app/models/product.repository";
import { AuthGuard } from "../auth/auth.guard";
import { AuthService } from "src/app/models/auth.service";

@Component({
    selector:"product-list",
    templateUrl: "list.component.html"
})

export class ListComponent{
    

    title = 'Product List';
    authenticated : boolean;

    constructor(public repository: ProductRepository, private router: Router,
        private auth: AuthService){
        repository.setProduct();
        this.authStatus();
    }

    authStatus (){
            this.authenticated = this.auth.authenticated;  
    }

    

    get productsList(): Product[]{
        return this.repository.getProduct();
    
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("products/delete/"+id);
        }
    }

    showDetails(id: string){
        this.router.navigateByUrl(`prod/details/${id}`)
    }
}