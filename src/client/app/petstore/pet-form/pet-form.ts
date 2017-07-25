import { Validators } from '@angular/forms';

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
        'price': ['', [Validators.required, Validators.pattern('[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?')]],
        //'price': ['', Validators.required],
        'quantity': ['',[ Validators.required,Validators.max(1000), Validators.pattern(new RegExp('^[0-9]+$'))]],
        'description': ['', Validators.required]
    };
    return form;
}
