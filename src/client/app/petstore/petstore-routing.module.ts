import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'pet-store', component: PetListComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PetstoreRoutingModule { }
