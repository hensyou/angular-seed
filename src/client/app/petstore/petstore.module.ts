import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './petstore.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';
import { PetService } from './pet-services/pet.service';
import { PetFormComponent } from './pet-form/pet-form.component';
import { SharedModule } from '../shared/shared.module';
import { PetstoreRoutingModule } from './petstore-routing.module';


@NgModule({
  imports: [CommonModule,SharedModule,PetstoreRoutingModule,ReactiveFormsModule],
  declarations: [PetsComponent,PetListComponent,PetCreateComponent,PetDetailComponent,PetUpdateComponent,PetFormComponent],
  exports: [PetsComponent]
})
export class PetStoreModule { }
