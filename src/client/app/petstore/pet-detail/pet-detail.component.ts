import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { getObjectKeys } from '../../shared/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'pet-details',
    moduleId: module.id,
    templateUrl: 'pet-detail.component.html'
})

export class PetDetailComponent {
    @Input()
    pet: Pet;

    constructor(
        private modalService:NgbModal
    ) {}


    pet_properties = () => { return getObjectKeys(this.pet); };
    open(detailcontent:any) {
        this.modalService.open(detailcontent).result.then((result) => {
            console.log(result);
        }, (reason) => {
            console.log(reason);
        });
    }
}
