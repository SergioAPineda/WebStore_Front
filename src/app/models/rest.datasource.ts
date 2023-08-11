import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Product } from "./product.model";
import { Question } from "./question.model";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { ResponseModel } from "./response.model";
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

    deleteProduct(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(
                `${this.baseUrl}products/delete/${id}`,
                this.provideToken()
                ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    
    // Question Data Source

    // Get Question list from the backend.
    getQuestionList(): Observable<Question[]>{
        console.log("get questions endpoint  "+this.baseUrl + "questions/id")
        return this.http.get<Question[]>(this.baseUrl + "questions/id");
    }

    // Insert Question
    insertQuestion(item: Question): Observable<Question> {
        return this.http.post<Question>(
                this.baseUrl + "questions/new",
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

    // update question
    updateQuestion(item: Question): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(
                `${this.baseUrl}questions/update/${item._id}`,
                item,
                this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    // delete question
    deleteQuestion(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(
                `${this.baseUrl}questions/delete/${id}`,
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