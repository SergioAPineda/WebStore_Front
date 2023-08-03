import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";


@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository,
        RestDataSource,
        AuthService
    ]
})
export class ModelModule{}