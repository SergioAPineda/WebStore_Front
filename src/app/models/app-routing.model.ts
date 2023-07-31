import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../components/auth/signin.component';
import { SignUpComponent } from '../components/auth/signup.component';
import { ProductsComponent } from '../components/ad/products.component';
import { IndexComponent } from '../components/index.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: IndexComponent },
            { path: "ads/products", component: ProductsComponent },
            { path: "users/signin", component: SignInComponent },
            { path: "users/signup", component: SignUpComponent },
            { path: "**", redirectTo: "" }
        ])
    ],
    exports: [RouterModule],
})

export class AppRoutingModule {}