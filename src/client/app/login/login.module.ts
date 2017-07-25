import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { AuthenticationService } from './login.service';
@NgModule({
    imports:[ReactiveFormsModule, CommonModule, LoginRoutingModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers:[AuthenticationService]
})
export class LoginModule { }
