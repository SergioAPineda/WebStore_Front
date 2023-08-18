import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionModel } from "src/app/models/question.model";
import { ProductRepository } from "src/app/models/product.repository";
import { QuestionRepository } from "src/app/models/question.repository";
import { Product } from "src/app/models/product.model";
import { NgForm } from "@angular/forms";

@Component({
    selector:"question-list",
    templateUrl: "questions.component.html"
})

export class QuestionListComponent{

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

    // postQuestion(item: QuestionModel) {
    //     this.repository.saveProduct(this.item);
    //     this.router.navigateByUrl("products/list");                
    // }

    save(form: NgForm) {
        console.log('question save')
        this.repository.postQuestion(this.query);
        this.router.navigateByUrl(`/prod/details/${this.query.product}`);
        //this.router.navigateByUrl("products/list");                
    }

    /* deleteQuestionMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("questions/delete/"+id);
        }
    } */
}