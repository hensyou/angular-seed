import { Validators } from '@angular/forms';

export function loginForm() {
    let form = {
        'username': ['', Validators.required],
        'password': ['', Validators.required]
    };
    return form;
}
