import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';


@NgModule({
    imports: [ModelModule, PartialsModule, BrowserModule, FormsModule, RouterModule],
    declarations: [ListComponent],
    exports: [ListComponent]
})

export class ProductsModule{}