import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import {QuestionRepository} from "./question.repository"
import { UserRepository } from "./user.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";


@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository,
        UserRepository,
        QuestionRepository,
        RestDataSource,
        AuthService
    ]
})
export class ModelModule{}