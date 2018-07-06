import { Injectable } from '@angular/core';
import { Theme } from './theme.enum';
import { OverlayContainer } from '@angular/cdk/overlay';

/**
 * Service wrapping the rather complicated theming mechanism in a code friedly consumable fashion.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  public get ThemeClass(): string {
    return this._SelectedTheme;
  }

  private _SelectedTheme = 'theme__blue__light';

  constructor(private overlayContainer: OverlayContainer) {}

  public changeTheme(theme: Theme): void {
    const newThemeClass = this.getThemeClass(theme);
    if (newThemeClass !== this._SelectedTheme) {
      this.overlayContainer.getContainerElement().classList.remove(this._SelectedTheme);
      this.overlayContainer.getContainerElement().classList.add(newThemeClass);
      this._SelectedTheme = newThemeClass;
    }
  }

  private getThemeClass(theme: Theme): string {
    switch (theme) {
      case Theme.Blue:
        return 'theme__blue__light';
      case Theme.BlueDark:
        return 'theme__blue__dark';
      case Theme.Purple:
        return 'theme__purple__light';
      case Theme.PurpleDark:
        return 'theme__purple__dark';
      default:
        return 'theme__blue__light';
    }
  }
}
