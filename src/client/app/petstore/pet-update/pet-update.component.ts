import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Pet } from '../models/pet';
import { PetFormComponent } from '../pet-form/pet-form.component';


@Component({
  selector: 'pet-update',
  moduleId: module.id,
  templateUrl: 'pet-update.component.html'
})

export class PetUpdateComponent {
  @Input()
  pet: Pet;

  @Output() updatePetsEmitter: EventEmitter<string>=new EventEmitter<string>();

  updatePet(event:any) {
    console.log('updating pet..');
    this.updatePetsEmitter.emit('get all pets');
  }

}
