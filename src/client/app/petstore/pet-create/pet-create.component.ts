import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PetFormComponent } from '../pet-form/pet-form.component';


@Component({
  selector: 'pet-create',
  moduleId: module.id,
  templateUrl: 'pet-create.component.html'
})

export class PetCreateComponent {
    @Output() updatePetsEmitter: EventEmitter<string>=new EventEmitter();

    updatePets(event:any) {
          this.updatePetsEmitter.emit('get all pets');
    }

}
