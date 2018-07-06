import { Component, OnInit } from '@angular/core';
import { AppStateService } from './../../services/app-state/app-state.service';
import { ThemingService } from '../../services/theming/theming.service';

@Component({
  selector: 'm-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
  constructor(public Theming: ThemingService, public AppState: AppStateService) {}

  ngOnInit() {}
}
