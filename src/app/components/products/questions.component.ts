import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { QuestionModel } from "src/app/models/question.model";
import { ProductRepository } from "src/app/models/product.repository";
import { QuestionRepository } from "src/app/models/question.repository";
import { Product } from "src/app/models/product.model";

@Component({
    selector:"question-list",
    templateUrl: "questions.component.html"
})

export class QuestionListComponent{

    title = 'Question List';

    constructor(public repository: QuestionRepository, item: Product, private router: Router){
        repository.setQuestion(item);
    }

    get questionList(): QuestionModel[]{
        return this.repository.getQuestion();
    }

    deleteQuestionMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("questions/delete/"+id);
        }
    }
}