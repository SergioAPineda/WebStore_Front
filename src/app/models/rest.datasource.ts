import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Product } from "./product.model";
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
        return this.http.get<Product[]>(this.baseUrl + "products/");
    }
    
    getProductsByUser(item: User): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl + `products/user/${item._id}`);
    }

    getUsersList(): Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl + "users/userlist");
    }

    getQuestionsByProduct(product_id: String): Observable<QuestionModel[]>{
        return this.http.get<QuestionModel[]>(this.baseUrl+ `question/product/${product_id}`)
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

    postQuestion(item: QuestionModel): Observable<QuestionModel> {
        return this.http.post<QuestionModel>(
                this.baseUrl + "question/new",
                item
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

    updateQuestion(item: QuestionModel): Observable<ResponseModel>{
        return this.http.put<ResponseModel>(
            `${this.baseUrl}question/update/${item._id}`,
            item,
            this.provideToken()
        ).pipe(map(response => {
            return response;
        }),
        catchError(error => {return of(error.error)}));
    }

    updateUser(item: User): Observable<ResponseModel> {

        console.log("user id received2: "+item._id)

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