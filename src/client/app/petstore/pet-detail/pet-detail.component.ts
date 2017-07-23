import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { getObjectKeys } from '../../shared/common';

@Component({
    selector: 'pet-details',
    moduleId: module.id,
    templateUrl: 'pet-detail.component.html'
})

export class PetDetailComponent {
    @Input()
    pet: Pet;

    pet_properties = () => { return getObjectKeys(this.pet); };

}
