import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class ProductRepository{

    private ProductList: Product[] = [];
    listReady: boolean = false;

    constructor(private dataSource: RestDataSource){}

    getProduct(): Product[]{
        return this.ProductList
    }

    setProduct(){
        this.dataSource.getProductsList().subscribe(data => {
            this.ProductList = data;
            this.listReady = true;
        });
    }

// 
getItem(id: string): Product {
    return Object.assign({}, this.ProductList.find(i => i._id === id)!);      
    // return (this.Product.find(i => i._id === id)!);        
}

async saveProduct(item: Product) {

    // If it does not have id, then create a new item.
    if (item._id == null || item._id == "") {
        this.dataSource.insertProduct(item)
            .subscribe(response => {
                if(response._id) // If API created
                {
                    this.ProductList.push(response);
                }
                else{ // If API send error.
                    // Convert into ResponseModel to get the error message.
                    let error = response as ResponseModel;  
                    alert(`Error: ${error.message}`);
                }
            });
    } else {
        // If it has id, then update a existing item.
        this.dataSource.updateProduct(item).subscribe(resp => {

            // Convert into ResponseModel to get the error message.
            let response = resp as ResponseModel;
            if (response.success == true) {
                console.log(`Sucess: ${response.success}`);
                this.ProductList.splice(this.ProductList.
                    findIndex(i => i._id == item._id), 1, item);
            }
            else{
                // If API send error.
                alert(`Error: ${response.message}`);
            }        
        });
    }
}

deleteProduct(id: string) {
    this.dataSource.deleteProduct(id).subscribe(response => {
        if (response.success) {
            this.ProductList.splice(this.ProductList.
                findIndex(item => item._id == id), 1);                                
        }
        else{
            alert(`Error: ${response.message}`);
        }
    })
}

}