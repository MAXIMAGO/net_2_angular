import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * A service to simplify and centralize navigation throughout the application.
 * This way only this class in particular needs to be managed after changes to app routes.
 * Furthermore no magicstrings in html!
 */
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private _Router: Router) {}

  public navigateHome() {
    this._Router.navigateByUrl('/');
  }

  public navigateWpf() {
    this._Router.navigateByUrl('/wpf');
  }

  public navigateAngular() {
    this._Router.navigateByUrl('/angular');
  }
}
