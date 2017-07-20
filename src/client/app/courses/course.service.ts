import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CourseService {
    constructor(private http: Http) { }


    getCourses(): string[] {
        return ['adf', 'asd2'];
    }
    get(): Observable<string[]> {
        return this.http.get('assets/data.json')
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
