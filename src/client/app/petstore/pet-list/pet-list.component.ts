import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { PetDetailComponent } from '../pet-detail/pet-detail.component';
import { PetUpdateComponent } from '../pet-update/pet-update.component';
import { PetCreateComponent } from '../pet-create/pet-create.component';
import { PetService } from '../pet-services/pet.service';

@Component({
    selector: 'pet-list',
    moduleId: module.id,
    templateUrl: 'pet-list.component.html',
    providers:[ PetService ]
})

export class PetListComponent {
    public pets: any;

    constructor(private petService: PetService) {
        this.getPets();
    }

    petsChanged(event:any) {
        console.log('captured petsChanged event, retrieving all pets');
        this.getPets();
    }

    getPets() {
        console.log('pet-list is getting all pets');
        this.petService.getAllPets()
            .subscribe(
                response => this.pets = response
        );
    }
}
