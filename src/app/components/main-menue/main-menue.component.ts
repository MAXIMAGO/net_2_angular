import { ThemingService } from './../../services/theming/theming.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from '../../services/theming/theme.enum';

@Component({
  selector: 'm-main-menue',
  templateUrl: './main-menue.component.html',
  styleUrls: ['./main-menue.component.css']
})
export class MainMenueComponent implements OnInit {
  public Theming = Theme;

  constructor(private themingService: ThemingService) {}

  ngOnInit() {}

  public changeTheme(theme: Theme): void {
    this.themingService.changeTheme(theme);
  }
}
