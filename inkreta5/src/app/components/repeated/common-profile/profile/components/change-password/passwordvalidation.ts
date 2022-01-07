import { AbstractControl,ValidatorFn,ValidationErrors } from "@angular/forms";
export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get('newpassword');
    const alterEgo = control.get('re_newpassword');
  
    return name && alterEgo && name.value !== alterEgo.value ? { misMatch : true } : null;
};

export function externalValidators(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : {forbiddenName: {value: control.value}};
    };
}