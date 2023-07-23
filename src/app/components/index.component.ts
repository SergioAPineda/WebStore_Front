import { Component } from "@angular/core";
import { Ad } from "../models/ad.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html'
})

export class IndexComponent{
    title = 'Home'
}