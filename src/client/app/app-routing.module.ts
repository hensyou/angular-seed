import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent }from './home/home.component';
import { AboutComponent }from './about/about.component';
import { LoginComponent }from './login/login.component';
import { PetListComponent } from './petstore/pet-list/pet-list.component';
import { CanActivateAuthGuard } from './authguard.service';
@NgModule({
  imports: [
    RouterModule.forRoot([
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
      { path:'',redirectTo:'/home',pathMatch:'full'},
      { path:  'home',      component: HomeComponent },
      { path: 'login',      component: LoginComponent},
      { path: 'pet-store',  component: PetListComponent, canActivate: [CanActivateAuthGuard]},
      { path: 'about',      component: AboutComponent },

    ])
  ],
  exports: [RouterModule],
  providers: [CanActivateAuthGuard]
})
export class AppRoutingModule { }

