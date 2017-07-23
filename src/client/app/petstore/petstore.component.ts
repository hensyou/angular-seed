import { Component, OnInit } from '@angular/core';
import { PetService } from './petstore.service';
@Component({
    moduleId:module.id,
    selector: 'pet-store',
    templateUrl:'petstore.component.html',
    providers:[PetService]

})
export class PetsComponent implements OnInit {
    title :string;
    pets: any[] = [];
    errorMessage : string;
    new_pet_name : string;
    pet :Pet;
    showAddress: boolean;
    constructor( public petService : PetService) {}
    ngOnInit() {
        this.getPets();
    }

    getPets() {
        this.title = 'Xiao Bian pets';
        this.petService.getPets().subscribe(
        pets => this.pets= pets,
        error => this.errorMessage = <any>error);
  }
    toggleAddress() {
        this.showAddress=!this.showAddress;
    }
    addPet():  boolean  {
        console.log(this.new_pet_name);
        this.pets.push(this.new_pet_name);
        return false;
    }

}

interface Pet {
    id: number;
    description: string;
    name : string;
    price: number;
    quantity:number;
}

