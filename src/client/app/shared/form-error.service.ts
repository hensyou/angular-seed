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
        //let errorField = getObjectKeys(error)[0];
        console.log(error);
        //{price: "Required"}
        // "price"
        return error;
    }

    getErrors(form:FormGroup) {
        let formFields = this.getFormFields(form);
        let errors=[];
        for (let field of formFields) {
            let control = form.get(field);
            if (control) {
                for (let errorType in control.errors) {
                    if (control.errors.hasOwnProperty(errorType) && control.touched) {
                        console.log('getting error message for '+ errorType);
                        errors.push({ [field]: this.getValidatorErrorMessage(errorType) });
                    }
                }
            }
        }
        return errors;
    }
    getValidatorErrorMessage(code:string) {
    console.log('getting validator message for '+code);
    let ErrorMessageConfig = {
       'required': 'Required',
      'maxlength': 'Maximum length exceed',
      'invalidName': 'First letter should be captialized',
      'pattern':'Invalid Format',
    };
    return (<any>ErrorMessageConfig)[code];
  }

}

// export class ErrorMessageConfig {
//       [key: string]: string;
//       //other validation messages goes here
// }
