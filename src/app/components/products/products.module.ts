import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
    imports: [BrowserModule, FormsModule, PartialsModule],
    declarations: [
        ProductsComponent
    ],
    exports: [ProductsComponent]
})

export class ProductsModule{

}