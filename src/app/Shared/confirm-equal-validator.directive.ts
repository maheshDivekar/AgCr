import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
selector: '[appConfirmEqualValidator]',
providers: [{
  provide : NG_VALIDATORS,
  useExisting: ConfirmEqualValidatorDirective,
  multi : true
}]
})
export class ConfirmEqualValidatorDirective implements Validator {
  // @Input() appConfirmEqualValidator: string ;
  // validate(control: AbstractControl): {[key: string]: any} | null {
     // return control.value === this.appSelectValidator ? {'defaultSelected': true } : null ;
      // return control.value === this.defaultvalue ? {'defaultSelected': true } : null ;
     // const controlToCompare = control.parent.get(this.appConfirmEqualValidator) ;
     // if (controlToCompare && controlToCompare.value !== control.value) {
     // return {'notEqual' : true };
     // }
     // return null;
   // }

    validate(passwordGroup: AbstractControl): {[key: string]: any} | null {
      // return control.value === this.appSelectValidator ? {'defaultSelected': true } : null ;
       // return control.value === this.defaultvalue ? {'defaultSelected': true } : null ;
       const passwordField = passwordGroup.get('password') ;
       const confirmpasswordField = passwordGroup.get('confirmpassword') ;
       if (passwordField && confirmpasswordField
        && passwordField.value !== confirmpasswordField.value) {
       return {'notEqual' : true };
       }
       return null;
     }

}
