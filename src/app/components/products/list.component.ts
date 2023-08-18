import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ProductRepository } from "src/app/models/product.repository";
import { UserRepository } from "src/app/models/user.repository";
import { AuthService } from "src/app/models/auth.service";
import { User } from "src/app/models/user.model";

@Component({
    selector:"product-list",
    templateUrl: "list.component.html"
})

export class ListComponent{

    title = 'My Products';
    item: Product = new Product();
    user: User = new User();

    constructor(public auth: AuthService, public repository: ProductRepository, public userRepository: UserRepository, private router: Router){
        userRepository.setUser();
        repository.setProduct();
    }

    get productsList(): Product[]{
        this.user = this.userRepository.getUserByUserName(this.auth.username);
        console.log('usuario resultado: '+this.user.username)
        return this.repository.getProductsByUser(this.user);
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