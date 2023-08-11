import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Question } from "src/app/models/question.model";
import { ProductRepository } from "src/app/models/product.repository";
import { QuestionRepository } from "src/app/models/question.repository";

@Component({
    selector:"question-list",
    templateUrl: "questions.component.html"
})

export class QuestionListComponent{

    title = 'Question List';

    constructor(public repository: QuestionRepository, private router: Router){
        repository.setQuestion();
    }

    get questionList(): Question[]{
        return this.repository.getQuestion();
    }

    deleteQuestionMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("questions/delete/"+id);
        }
    }
}