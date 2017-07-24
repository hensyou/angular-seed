import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Pet } from '../models/pet';


@Injectable()
export class PetService {

  // Placeholder for pets
  pets: Pet[] = [];
  pet: Pet;

  private petUrl = 'https://petstore-inventory.cfapps.io/v1/pets';  // URL to web api

  //private petUrl='http://localhost:8091/v1/pets';

  constructor(private http: Http) {}

  addPet(pet: Pet) {
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.petUrl, JSON.stringify(pet), {headers: headers})
        .map(this.extractData)
        .catch(this.handleError);
        //.subscribe();

    //return this
  }

  updatePet(pet: Pet, formData: Pet) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${this.petUrl}/${pet.id}`;

    return this.http.put(url, JSON.stringify(formData), {headers:headers})
        .map(this.extractData)
        .catch(this.handleError);
        //.subscribe();

    //return this
  }

  getAllPets(): Observable<any> {
    return this.http.get(this.petUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPetById(id: string): Observable<Pet> {
    let url = `${this.petUrl}/${id}`;

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deletePetById(id: string): Observable<any> {
    let url = `${this.petUrl}/${id}`;

    return this.http.delete(url)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
