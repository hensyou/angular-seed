import { Validators } from '@angular/forms';

import { Pet } from '../models/pet';
import { getObjectValue } from '../../shared/common';
import { NameValidator } from '../../shared/petstore-validator';


export function petForm() {

    let nameChecks: any[] = [
        Validators.required,
        Validators.maxLength(10),
        NameValidator
    ];

    let form = {
        'name': ['', Validators.compose(nameChecks)],
        //'price': ['', [Validators.required, Validators.pattern('^\d+(,\d{1,2})?$')]],
        'price': ['', Validators.required],
        'quantity': ['', Validators.required],
        'description': ['', Validators.required]
    };
    return form;
}
