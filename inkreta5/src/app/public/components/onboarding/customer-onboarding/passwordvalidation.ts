import { AbstractControl,ValidatorFn,ValidationErrors } from "@angular/forms";
export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get('Password');
    const alterEgo = control.get('dty');
  
    return name && alterEgo && name.value !== alterEgo.value ? { misMatch : true } : null;
};
