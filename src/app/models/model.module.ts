import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";


@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository,
        RestDataSource
    ]
})
export class ModelModule{}