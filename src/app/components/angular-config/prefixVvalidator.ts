import { ValidatorFn, AbstractControl } from '@angular/forms';

export function prefixValidator(prefix: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isMissing = !control.value || !(<string>control.value).startsWith(prefix + '-');
    return isMissing ? { prefixMissing: { value: control.value, prefix: prefix } } : null;
  };
}
