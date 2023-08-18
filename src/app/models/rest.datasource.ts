import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Product, QAPair } from "./product.model";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { ResponseModel } from "./response.model";
import { QuestionModel } from "./question.model";
import { environment } from "src/environments/environment";


@Injectable()
export class RestDataSource{

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient){
        // this.baseUrl = "http://localhost:3000/";   
        this.baseUrl = `${environment.backend_url}` 
        console.log("Backend URL: ", this.baseUrl);
    }

    // Get Product list from the backend.
    getProductsList(): Observable<Product[]>{
        console.log("get products endpoint  "+this.baseUrl + "products/")
        return this.http.get<Product[]>(this.baseUrl + "products/");
    }

    getUsersList(): Observable<User[]>{
        console.log("get users endpoint  "+this.baseUrl + "users/userlist")
        return this.http.get<User[]>(this.baseUrl + "users/userlist");
    }

    getQuestionsByProduct(item: Product): Observable<QuestionModel[]>{
        return this.http.get<QuestionModel[]>(this.baseUrl+ `question/product/"${item._id}`)
    }

    insertProduct(item: Product): Observable<Product> {
        return this.http.post<Product>(
                this.baseUrl + "products/new",
                item,
                this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {
                console.log(error.error);
                return of(error.error);
            }));
    }

updateProduct(item: Product): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(
                `${this.baseUrl}products/update/${item._id}`,
                item,
                this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }



    updateUser(item: User): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(
                `${this.baseUrl}users/edit/${item._id}`,
                item,
                this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    deleteProduct(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(
                `${this.baseUrl}products/delete/${id}`,
                this.provideToken()
                ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    deleteUser(id: string): Observable<ResponseModel> {
        console.log("deleteUser rest datasource")
        console.log("this.baseUrl "+this.baseUrl)
        console.log("id "+id)
        return this.http.delete<ResponseModel>(
                `${this.baseUrl}users/delete/${id}`,
                this.provideToken()
                ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    
    // User endpoint of the API
    signupUser(user: User): Observable<ResponseModel> {
        console.log("sign up endpoint  "+this.baseUrl + "users/signup")
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", user)
            .pipe(
                map(response => {
                    return response;
                }),
                catchError(error => {
                    return of(error.error)
                }));
    }


// Add a method to add a question for a product
addQuestionToProduct(productId: string, question: string): Observable<ResponseModel> {
    const newQuestion = {
      question: question,
      answer: '' // Initialize the answer as an empty string
    };

    return this.http.post<ResponseModel>(
      `${this.baseUrl}products/${productId}/question`,
      newQuestion,
      this.provideToken()
    ).pipe(
      map(response => response),
      catchError(error => of(error.error))
    );
  }

// Add a method to answer a question for a product
answerQuestion(productId: string, questionId: string, answer: string): Observable<ResponseModel> {
    const answerData = {
      questionId: questionId,
      answer: answer
    };
  
    return this.http.post<ResponseModel>(
      `${this.baseUrl}products/${productId}/questions/${questionId}/answer`, // Update the endpoint
      answerData,
      this.provideToken()
    ).pipe(
      map(response => response),
      catchError(error => of(error.error))
    );
  }
  
// New function to get question-answer pairs for a product
getQuestionAnswerPairs(productId: string): Observable<QAPair[]> {
    return this.http.get<QAPair[]>(
        `${this.baseUrl}products/${productId}/qas`, // Update the endpoint
        this.provideToken()
    ).pipe(
        catchError(error => of([])) // Handle errors and return an empty array
    );
}
  

authenticate(user: string, pass: string): Observable<ResponseModel> {
        console.log("sign in endpoint  "+this.baseUrl + "users/signin")
        return this.http.post<any>(this.baseUrl + "users/signin",
            {
                username: user,
                password: pass
            }).pipe(
                map(response => {
                    // console.log(response);
                    this.auth_token = response.success ? response.token : null;
                    return response;
                }),
                catchError(error => { return of(error.error) })
            );
    }

    // Inserts the token in the header.
    private provideToken() {
        return {
            headers: new HttpHeaders(
                {
                    "Authorization": `Bearer ${this.auth_token}`
                }
            )
        }
    }
}