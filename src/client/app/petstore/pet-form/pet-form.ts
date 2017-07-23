import { Validators } from '@angular/forms';

import { Pet } from '../models/pet';
import { getObjectValue } from '../../shared/common';


export function petForm() {
    let idChecks: any[] = [
        Validators.required
    ];

    let nameChecks: any[] = [
        Validators.required,
        Validators.maxLength(10)
    ];

    let form = {
        'id': ['', Validators.compose(idChecks)],
        'name': ['', Validators.compose(nameChecks)],
        'price': ['', Validators.required],
        'description': ['', Validators.required]
    };
    console.log(form);
    return form;
}
