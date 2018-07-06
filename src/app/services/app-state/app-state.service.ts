import { Injectable } from '@angular/core';

/**
 * A service designed to provide knowledge about the apps current interaction state as well as a centralized way to alter it from code,
 * such as toggeling view elements based on other user interactions.
 */
@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public IsMenueOpen: boolean;

  constructor() {}

  public OpenMenue() {
    this.IsMenueOpen = true;
  }

  public CloseMenue() {
    this.IsMenueOpen = false;
  }

  public ToggleMenue() {
    this.IsMenueOpen = !this.IsMenueOpen;
  }
}
