import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function externalValidators(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : {forbiddenName: {value: control.value}};
    };
}