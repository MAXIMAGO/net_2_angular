import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { prefixValidator } from './prefixVvalidator';
@Component({
  selector: 'm-angular-config',
  templateUrl: './angular-config.component.html',
  styleUrls: ['./angular-config.component.css']
})
export class AngularConfigComponent implements OnInit {
  public Configuration: FormGroup;
  public Modules = [
    { value: 'commonjs', display: 'CommonJS' },
    { value: 'amd', display: 'AMC' },
    { value: 'system', display: 'System' },
    { value: 'umd', display: 'UMD' },
    { value: 'es2015', display: 'ES6' },
    { value: 'esnext', display: 'ES.Next' }
  ];

  constructor(fb: FormBuilder) {
    this.Configuration = fb.group({
      name: ['', [Validators.required, prefixValidator('M')]],
      module: ['es2015', Validators.required],
      author: ['', [Validators.required, Validators.email]],
      memoryDb: [false, Validators.required]
    });
  }

  ngOnInit() {}

  public getErrorMessage(errors: ValidationErrors): string {
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        switch (key) {
          case 'required':
            return 'Feld wird benötigt';
          case 'email':
            return 'Keine gültige Email-Adresse';
          case 'prefixMissing':
            return `Angular projekte müssen mit "${errors[key].prefix}-" beginnen`;
          default:
            return 'Eingabe ist nicht valide';
        }
      }
    }
  }

  public create(): void {
    console.log('call a service to create');
    this.reset();
  }

  public reset(): void {
    this.Configuration.reset();
  }
}
