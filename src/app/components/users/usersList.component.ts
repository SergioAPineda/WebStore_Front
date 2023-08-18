import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";
import { User } from "src/app/models/user.model";
import { UserRepository } from "src/app/models/user.repository";

@Component({
    selector:"user-list",
    templateUrl: "usersList.component.html"
})

export class UsersListComponent{

    title = 'Users List';
    authenticated: boolean;

    constructor(public repository: UserRepository, private router: Router, private auth: AuthService){
        repository.setUser();
            this.authStatus();
    }
    authStatus() {
        this.authenticated = this.auth.authenticated; 
    }

    get usersList(): User[]{
        
        return this.repository.getUser();
    }

    deleteMethod(id: string) {
        console.log("delete method user list")
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("users/delete/"+id);
        }
    }
}