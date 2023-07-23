import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class RestDataSource{

    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = "http://localhost:3000/";
    }

    // Get inventory list from the backend.
    getInvetoryList(): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl + "inventory/list");
    }

}