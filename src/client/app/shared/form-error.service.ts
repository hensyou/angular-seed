import { Injectable, Inject } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { getObjectKeys } from '../shared/common';

@Injectable()
export class CheckFormErrors {

    getFormFields(form:FormGroup) {
        return getObjectKeys(form.controls);
    }

    formError(form:FormGroup) {
        let error = this.getErrors(form);
        let errorField = getObjectKeys(error)[0];
        console.log(error+ 'and error Field is ' + errorField);
        //{price: "Required"}
        // "price"
        return [error, errorField];
    }

    getErrors(form:FormGroup) {
        let formFields = this.getFormFields(form);

        for (let field of formFields) {
            let control = form.get(field);
            if (control) {
                for (let errorType in control.errors) {
                    if (control.errors.hasOwnProperty(errorType) && control.touched) {
                        console.log('getting error message for '+ errorType);
                        return { [field]: this.getValidatorErrorMessage(errorType) };
                    }
                }
            }
        }
        return null;
    }
    getValidatorErrorMessage(code:string) {
    console.log('getting validator message for '+code);
    let config = {
      'required': 'Required',
      'maxlength': 'Maximum length exceed',
      'invalidName': 'First letter should be captialized'
      //other validation messages goes here
    };
    return config[code];
  }

}
