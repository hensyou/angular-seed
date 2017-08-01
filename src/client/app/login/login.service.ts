import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {
    private authUrl = 'https://petstore-inventory-secure.cfapps.io/auth';
    private headers = new Headers({'Content-Type': 'application/json'});
    private jwtHelper: JwtHelper = new JwtHelper();
    constructor(private http: Http) {
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    console.log(this.jwtHelper.decodeToken(token),
                                this.jwtHelper.getTokenExpirationDate(token),
                                this.jwtHelper.isTokenExpired(token));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getToken(): string {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : '';
    }
    getAuthorities(): Array<string> {
        return this.jwtHelper.decodeToken(this.getToken())['authorities'].map((element:Authority) => { return element.authority;});
    }
    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    isLoggedIn(): boolean {
        var token: String = this.getToken();
        return token && token.length > 0;
    }
}

interface Authority {
    authority:string;
}
