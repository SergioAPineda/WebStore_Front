import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { QuestionModel } from "src/app/models/question.model";
import { ProductRepository } from "src/app/models/product.repository";
import { QuestionRepository } from "src/app/models/question.repository";
import { Product, QAPair } from "src/app/models/product.model";

@Component({
    selector:"question-list",
    templateUrl: "questions.component.html"
})

export class QuestionListComponent{
    product: Product = new Product();
    title = 'Product Information And Inquries';

    constructor(public repository: ProductRepository, item: Product, private router: Router){
        repository.setQAs(this.product._id);
    }

    
    get productsList(): Product[]{
        return this.repository.getProduct();
    
    }

    get qaPairs(): QAPair[] {
        return this.repository.getQAs();
      }

    deleteQuestionMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("questions/delete/"+id);
        }
    }
    
}