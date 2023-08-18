import { Injectable } from "@angular/core";
import { QuestionModel } from "./question.model";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class QuestionRepository {

    private QuestionList: QuestionModel[] = [];
    listReady: boolean = false;

    constructor(private dataSource: RestDataSource) { }

    getQuestion(): QuestionModel[] {
        return this.QuestionList
    }

    setQuestion(product_id: String) {
        console.log("setQuestion")

        this.dataSource.getQuestionsByProduct(product_id).subscribe(data => {

            console.log("data: " + data)

            this.QuestionList = data;
            this.listReady = true;
        });

    }

    postQuestion(item: QuestionModel) {
        console.log("postQuestion")

        this.dataSource.postQuestion(item)
            .subscribe(response => {
                if (response._id) // If API created
                {
                    this.QuestionList.push(response);
                }
                else { // If API send error.
                    // Convert into ResponseModel to get the error message.
                    let error = response as ResponseModel;
                    alert(`Error: ${error.message}`);
                }
            });
    }

    editQuestion(question: QuestionModel) {

        this.dataSource.updateQuestion(question).subscribe(resp => {

            // Convert into ResponseModel to get the error message.
            let response = resp as ResponseModel;
            if (response.success == true) {
                console.log(`Sucess: ${response.success}`);
                this.QuestionList.splice(this.QuestionList.
                    findIndex(i => i._id == question._id), 1, question);
            }
            else {
                // If API send error.
                alert(`Error: ${response.message}`);
            }
        });

    }

    // 
    // getItem(id: string): Question {
    //     return Object.assign({}, this.QuestionList.find(i => i._id === id)!);      
    //     // return (this.Question.find(i => i._id === id)!);        
    // }

    // async Question(item: Question) {

    //     // If it does not have id, then create a new item.
    //     if (item._id == null || item._id == "") {
    //         this.dataSource.insertQuestion(item)
    //             .subscribe(response => {
    //                 if(response._id) // If API created
    //                 {
    //                     this.QuestionList.push(response);
    //                 }
    //                 else{ // If API send error.
    //                     // Convert into ResponseModel to get the error message.
    //                     let error = response as ResponseModel;  
    //                     alert(`Error: ${error.message}`);
    //                 }
    //             });
    //     } else {
    //         // If it has id, then update a existing item.
    //         this.dataSource.updateQuestion(item).subscribe(resp => {

    //             // Convert into ResponseModel to get the error message.
    //             let response = resp as ResponseModel;
    //             if (response.success == true) {
    //                 console.log(`Sucess: ${response.success}`);
    //                 this.QuestionList.splice(this.QuestionList.
    //                     findIndex(i => i._id == item._id), 1, item);
    //             }
    //             else{
    //                 // If API send error.
    //                 alert(`Error: ${response.message}`);
    //             }        
    //         });
    //     }
    // }

    // deleteQuestion(id: string) {
    //     this.dataSource.deleteQuestion(id).subscribe(response => {
    //         if (response.success) {
    //             this.QuestionList.splice(this.QuestionList.
    //                 findIndex(item => item._id == id), 1);                                
    //         }
    //         else{
    //             alert(`Error: ${response.message}`);
    //         }
    //     })
    // }

}