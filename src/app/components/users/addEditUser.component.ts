import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../models/user.model";
import { UserRepository } from "../../models/user.repository";
import { AuthService } from "src/app/models/auth.service";

@Component({
    selector: "add-edit-user",
    templateUrl: "addEditUser.component.html"
})

export class AddEditUserComponent {
    
    title:string = 'Add a new Item';
    editing: boolean = false;
    user: User = new User();

    constructor(public auth: AuthService,
        private repository: UserRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 

        repository.setUser();
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.user = this.repository.getUserByUserName(this.auth.username);
            console.log('this.user')
        }    
    }

    get loggedUser(){
        console.log('user name auth: '+this.auth.username)
        this.user = this.repository.getUserByUserName(this.auth.username);
        console.log('user result: '+this.user)
        return this.user
    }

    save(form: NgForm) {
        this.repository.saveUser(this.user);
        // this.router.navigateByUrl("users/userlist");
        this.router.navigateByUrl(`users/${this.auth.username}`);                
             
    }

    update(form: NgForm) {
        this.repository.saveUser(this.user);
        this.router.navigateByUrl(`users/${this.auth.username}`);                
    }

    private deleteItem(id: string){
        console.log("addEdit User component")
        this.repository.deleteUser(id);
        this.router.navigateByUrl("users/userlist");
    }
    
}