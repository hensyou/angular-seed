import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { AuthenticationService } from './login.service';
import { loginForm } from './login-form';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers:[ AuthenticationService ]
})

export class LoginComponent implements OnInit {
    loading = false;
    error = '';
    loginForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private authenticationService: AuthenticationService) {
            this.loginForm=this.fb.group(loginForm());
        }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['pet-store']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            }, error => {
              this.loading = false;
              this.error = error;
            });
    }
}
