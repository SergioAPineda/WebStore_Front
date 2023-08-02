import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/signin.component';
import { SignUpComponent } from './components/auth/signup.component';
import { AddEditComponent } from './components/products/add_edit.component';
import { ListComponent } from './components/products/list.component';
import { IndexComponent } from './components/index.component';
import { AuthGuard } from "./components/auth/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: IndexComponent },
            { path: "products/list", component: ListComponent },
            { path: "products/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
            { path: "products/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
            { path: "users/signin", component: SignInComponent },
            { path: "users/signup", component: SignUpComponent },
            { path: "**", redirectTo: "" }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}