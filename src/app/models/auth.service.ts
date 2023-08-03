import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ResponseModel } from "./response.model";

@Injectable()
export class AuthService{

    public username: string;
    private _redirectUrl: string;

    constructor(private datasource: RestDataSource){}

    signupUser(user: User): Observable<ResponseModel> {
        console.log("AuthService - signupUser")
        return this.datasource.signupUser(user);
    }

    authenticate(username: string, password: string): Observable<ResponseModel> {
        console.log("AuthService - authenticate")
        return this.datasource.authenticate(username, password)
            .pipe(map(response => {
                if(response.success)
                {
                    this.username = username;
                }
                return response;
            }));
    }

    get redirectUrl(): string{
        console.log("AuthService - _redirectUrl "+this._redirectUrl)
        let result = this._redirectUrl;
        this._redirectUrl = null;
        return result;
    }

    set redirectUrl(url: string){
        this._redirectUrl = url;
    }

    clear() {
        this.username = null;
        this.datasource.auth_token = null;
    }

    get authenticated(): boolean {
        return this.datasource.auth_token != null;
    }
}