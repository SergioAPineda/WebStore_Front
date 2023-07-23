import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository{

    private ProductList: Product[] = [];
    listReady: boolean = false;

    constructor(private datasource: RestDataSource){}

    getProduct(): Product[]{
        return this.ProductList
    }

    setProduct(){
        this.datasource.getInvetoryList().subscribe(data => {
            this.ProductList = data;
            this.listReady = true;
        });
    }

}