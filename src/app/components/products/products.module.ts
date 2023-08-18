import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { AddEditComponent } from "./add_edit.component";
import { ProductDetailComponent } from './productDetail.component';
import { QuestionListComponent } from './questions.component';
import { AnswerComponent } from './answer.component';


@NgModule({
    imports: [ModelModule, PartialsModule, BrowserModule, FormsModule, RouterModule],
    declarations: [ListComponent, AddEditComponent, ProductDetailComponent, QuestionListComponent, AnswerComponent],
    exports: [ListComponent, AddEditComponent, ProductDetailComponent, QuestionListComponent, AnswerComponent]
})

export class ProductsModule{}