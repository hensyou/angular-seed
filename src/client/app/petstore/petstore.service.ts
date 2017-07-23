import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PetService {
    constructor(private http: Http) { }
    getPets(): Observable<string[]> {
        return this.http.get('https://petstore-inventory.cfapps.io/v1/pets')
            .map((res: Response) => res.json())
            //              .do(data => console.log('server data:', data))  // debug
            .catch(this.handleError);
    }
    /**
    * Handle HTTP error
    */
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
