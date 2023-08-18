import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/signin.component';
import { SignUpComponent } from './components/auth/signup.component';
import { UsersListComponent } from './components/users/users.module';
import { AddEditUserComponent } from './components/users/addEditUser.component';
import { AddEditComponent } from './components/products/add_edit.component';
import { ListComponent } from './components/products/list.component';
import { IndexComponent } from './components/index.component';
import { AuthGuard } from "./components/auth/auth.guard";
import { ProductDetailComponent } from './components/products/productDetail.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: IndexComponent },
            { path: "products/list", component: ListComponent, canActivate: [AuthGuard]},
            { path: "products/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
            { path: "products/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
            { path: "products/delete/:id", component: AddEditComponent, canActivate: [AuthGuard] },
            { path: "products/new", component: AddEditComponent, canActivate: [AuthGuard] },
            { path: "prod/details/:id", component: ProductDetailComponent},
            { path: "users/signin", component: SignInComponent },
            { path: "users/signup", component: SignUpComponent },
            { path: "users/userlist", component: UsersListComponent},
            { path: "users/:mode/:id", component: AddEditUserComponent, canActivate: [AuthGuard]},
            { path: "**", redirectTo: "" }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}