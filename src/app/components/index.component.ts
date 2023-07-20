import { Component } from "@angular/core";
import { Product } from "../models/product.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html'
})

export class IndexComponent{
    title = 'Home'
}