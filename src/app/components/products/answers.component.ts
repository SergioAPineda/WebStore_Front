// import { Component } from "@angular/core";
// import { NgForm } from "@angular/forms";
// import { Router, ActivatedRoute } from "@angular/router";
// import { Product, Owner } from "../../models/product.model";
// import { ProductRepository } from "../../models/product.repository";
// import { QuestionRepository } from "src/app/models/question.repository";
// import { Question } from "src/app/models/question.model";

// @Component({
//     selector: "add-answer",
//     templateUrl: "answers.component.html"
// })


// export class AnswerComponent {
    
//     title:string = 'Answer a question';
//     answering: boolean = false;
//     query: Question = new Question();

//     constructor(private repository: QuestionRepository,
//                 private router: Router,
//                 activeRoute: ActivatedRoute) 
//     { 
       

//         this.answering = activeRoute.snapshot.params["mode"] == "answer";
        
//         // Edit
//         if (this.answering) {
//             this.query = this.repository.getItem(activeRoute.snapshot.params["id"]);
//         } 

//         // Add
//         // else {
//         //     this.item.size = new Size();
//         // }        
//     }

//     save(form: NgForm) {
//         this.repository.saveQuestion(this.query);
//         this.router.navigateByUrl("questions/");                
//     }

//     private deleteItem(id: string){
//         this.repository.deleteQuestion(id);
//         this.router.navigateByUrl("questions/");
//     }
    
// }