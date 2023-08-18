import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionModel } from "src/app/models/question.model";
import { ProductRepository } from "src/app/models/product.repository";
import { QuestionRepository } from "src/app/models/question.repository";
import { Product } from "src/app/models/product.model";
import { NgForm } from "@angular/forms";

@Component({
    selector:"answer-list",
    templateUrl: "answer.component.html"
})

export class AnswerComponent{

    query: QuestionModel = new QuestionModel();

    constructor(public repository: QuestionRepository, private router: Router, activeRoute: ActivatedRoute){
        console.log("active route id: "+activeRoute.snapshot.params["id"])
        
        repository.setQuestion(activeRoute.snapshot.params["id"]);

        console.log("active route: "+activeRoute)
        this.query.product = activeRoute.snapshot.params["id"];
        this.query.userName = 'Unknown'

    }

    get questionList(): QuestionModel[]{
        return this.repository.getQuestion();
    }


    save(form: NgForm, question: QuestionModel) {
        console.log('question save')
        this.repository.editQuestion(question);
        this.router.navigateByUrl(`/prod/details/${this.query.product}`);               
    }

}