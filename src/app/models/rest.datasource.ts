import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ad } from "./ad.model";
import { Injectable } from "@angular/core";

@Injectable()
export class RestDataSource{

    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = "http://localhost:3000/";
    }

    // Get inventory list from the backend.
    getInvetoryList(): Observable<Ad[]>{
        return this.http.get<Ad[]>(this.baseUrl + "ads/products");
    }

}