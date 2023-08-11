import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/signin.component';
import { SignUpComponent } from './components/auth/signup.component';
import { AddEditComponent } from './components/products/add_edit.component';
import { ListComponent } from './components/products/list.component';
import { IndexComponent } from './components/index.component';
import { AuthGuard } from "./components/auth/auth.guard";
import { QuestionListComponent } from './components/products/questions.component';
import { AnswerComponent } from './components/products/answers.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: IndexComponent },
            { path: "products/list", component: ListComponent },
            { path: "products/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
            { path: "products/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
            { path: "questions/:id", component: QuestionListComponent},
            { path: "questions/:id/answers", component: AnswerComponent },
            { path: "users/signin", component: SignInComponent },
            { path: "users/signup", component: SignUpComponent },
            { path: "**", redirectTo: "" }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}