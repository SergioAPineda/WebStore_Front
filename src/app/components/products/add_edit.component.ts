import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Product, Owner } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {
    
    title:string = 'Add a new Item';
    editing: boolean = false;
    item: Product = new Product();

    constructor(private repository: ProductRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        // Delete
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        // Edit
        if (this.editing) {
            this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
            console.log(this.item);
        } 

        // Add
        // else {
        //     this.item.size = new Size();
        // }        
    }
    
    save(form: NgForm) {
        this.repository.saveProduct(this.item);
        this.router.navigateByUrl("products/list");                
    }

    private deleteItem(id: string){
        this.repository.deleteProduct(id);
        this.router.navigateByUrl("products/list");
    }
    
}