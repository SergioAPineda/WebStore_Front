import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../models/user.model";
import { UserRepository } from "../../models/user.repository";

@Component({
    selector: "add-edit-user",
    templateUrl: "addEditUser.component.html"
})

export class AddEditUserComponent {
    
    title:string = 'Add a new Item';
    editing: boolean = false;
    item: User = new User();

    constructor(private repository: UserRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 

        console.log("activeRoute.snapshot.params "+activeRoute.snapshot)
        if (activeRoute.snapshot.params["mode"] == "delete") {
            console.log("entrando a edit delete")
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        //this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        // Edit
        // if (this.editing) {
        //     this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
        // } 

        // Add
        // else {
        //     this.item.size = new Size();
        // }        
    }

    // save(form: NgForm) {
    //     this.repository.saveProduct(this.item);
    //     this.router.navigateByUrl("products/list");                
    // }

    private deleteItem(id: string){
        console.log("addEdit User component")
        this.repository.deleteUser(id);
        this.router.navigateByUrl("users/userlist");
    }
    
}