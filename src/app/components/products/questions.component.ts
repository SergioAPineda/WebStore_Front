import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionModel } from "src/app/models/question.model";
import { ProductRepository } from "src/app/models/product.repository";
import { QuestionRepository } from "src/app/models/question.repository";
import { Product } from "src/app/models/product.model";

@Component({
    selector:"question-list",
    templateUrl: "questions.component.html"
})

export class QuestionListComponent{

    query: QuestionModel = new QuestionModel();

    constructor(public repository: QuestionRepository, private router: Router, activeRoute: ActivatedRoute){
        console.log("active route id: "+activeRoute.snapshot.params["id"])
        repository.setQuestion(activeRoute.snapshot.params["id"]);
    }

    get questionList(): QuestionModel[]{
        console.log('question list')
        console.log(this.repository.getQuestion())
        return this.repository.getQuestion();
    }

    /* deleteQuestionMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("questions/delete/"+id);
        }
    } */
}