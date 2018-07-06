import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ProjectService } from '../../services/project/project.service';
import { NavigationService } from './../../services/navigation/navigation.service';

@Component({
  selector: 'm-wpf-config',
  templateUrl: './wpf-config.component.html',
  styleUrls: ['./wpf-config.component.css']
})
export class WpfConfigComponent implements OnInit {
  public Configuration: FormGroup;

  constructor(fb: FormBuilder, private _NavigationService: NavigationService, private _ProjectService: ProjectService) {
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
    this._ProjectService.scuffoldProject(this.Configuration.value).subscribe(() => {});
    this._NavigationService.navigateHome();
  }
}
