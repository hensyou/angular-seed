import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PetFormComponent } from '../pet-form/pet-form.component';
import { PetService } from '../pet-services/pet.service';
import { Observable }     from 'rxjs/Observable';
import { Pet } from '../models/pet';
@Component({
  selector: 'pet-delete',
  moduleId: module.id,
  templateUrl: 'pet-delete.component.html',
  providers:[ PetService ]
})

export class PetDeleteComponent {
    @Input()
    pet: Pet;
    @Output() updatePetsEmitter: EventEmitter<string>=new EventEmitter();
    observable : Observable<any>;

    constructor(
            private petService: PetService
        ) {}


    deletePet() {
        this.observable = this.petService.deletePetById(this.pet.id);
        this.observable.subscribe((data) => {
        console.log(data);
        this.updatePetsEmitter.emit('getall');
        });
      console.log('done');
      //this.petsChanged.emit(null);
    }
}

