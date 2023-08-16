import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/models/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    @Input() title?: string;
  authenticated: boolean;

    constructor(public auth: AuthService, private router: Router) {
      this.authStatus();
     }

    authStatus (){
      this.authenticated = this.auth.authenticated;  
}

    logout() {
        if (confirm('Are you sure?')) {
          this.auth.clear();
          this.authStatus ();
          this.router.navigateByUrl("/");
        }
      }
}