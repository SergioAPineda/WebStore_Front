import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AdRepository } from "./ad.repository";
import { RestDataSource } from "./rest.datasource";


@NgModule({
    imports: [HttpClientModule],
    providers: [
        AdRepository,
        RestDataSource
    ]
})
export class ModelModule{}