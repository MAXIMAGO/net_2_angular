import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-wpf-config',
  templateUrl: './wpf-config.component.html',
  styleUrls: ['./wpf-config.component.css']
})
export class WpfConfigComponent implements OnInit {
  public Configuration: FormGroup;

  constructor(fb: FormBuilder) {
    this.Configuration = fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
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
          default:
            return 'Eingabe ist nicht valide';
        }
      }
    }
  }

  public create(): void {
    console.log('call a service to create');
  }
}
