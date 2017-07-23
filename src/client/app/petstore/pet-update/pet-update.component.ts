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

  @Output() petsChanged = new EventEmitter();

  updatePets(event:any) {
    this.petsChanged.emit(null);
  }

}
