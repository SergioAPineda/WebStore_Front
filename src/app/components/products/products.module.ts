import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { AddEditComponent } from "./add_edit.component";
import { QuestionListComponent } from './questions.component';
import { AnswerComponent } from './answers.component';


@NgModule({
    imports: [ModelModule, PartialsModule, BrowserModule, FormsModule, RouterModule],
    declarations: [ListComponent, AddEditComponent, QuestionListComponent, AnswerComponent],
    exports: [ListComponent, AddEditComponent, QuestionListComponent, AnswerComponent]
})

export class ProductsModule{}