import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";
import { QuestionRepository } from "./question.repository";


@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository,
        QuestionRepository,
        RestDataSource,
        AuthService
    ]
})
export class ModelModule{}