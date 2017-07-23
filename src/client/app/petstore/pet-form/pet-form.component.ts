import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import { FormsModule, FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { getObjectKeys } from '../../shared/common';
import { Pet } from '../models/pet';
import { petForm } from './pet-form';
import { PetService } from '../pet-services/pet.service';


@Component({
  selector: 'pet-form',
  moduleId: module.id,
  templateUrl: 'pet-form.component.html',
  providers:[PetService]
})

export class PetFormComponent implements OnInit {

  petForm: FormGroup;
  formFields: Array<string>;
  observable : Observable<any>;
  view: string;
  @Input()
  pet: Pet;
  @Output() updatePets = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private router: Router) {

    this.petForm = this.fb.group(petForm());
    this.formFields = getObjectKeys(this.petForm.controls);
  }

  ngOnInit() {
    if (this.pet) {
      this.view = 'update_pet_' + this.pet.id ;
      // update form controls with pet properties in update view
      for (let field of getObjectKeys(this.pet)){
        let control = this.petForm.controls[field];
        if (control) {
            // (<FormControl>control).setValue(this.pet[field], true);
        }
      }
    }else {
      this.view = 'create_pet';
    }
  }

  formError() {
    // return this.formErrorsService.formError(this.petForm)
  }

  savePet() {
    if (this.petForm.dirty && this.petForm.valid) {
      let form = this.petForm.value;
      let formPet = new Pet({
        id: form.id,
        name: form.name,
        price: form.price,
        quantity: form.quantity,
        description: form.description
      });

      if(this.pet) {
        this.observable = this.petService.updatePet(this.pet, formPet);
      } else {
        this.observable = this.petService.addPet(formPet);
      }
      this.observable.subscribe((data) => {
        // notify parent component
        this.updatePets.emit(null);
      });
      console.log('done');
    }
  }

}
