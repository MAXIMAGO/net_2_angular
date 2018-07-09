import { NavigationService } from './../../services/navigation/navigation.service';
import { ProjectService, IProject } from './../../services/project/project.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { AppStateService } from '../../services/app-state/app-state.service';

@Component({
  selector: 'm-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public Projects: IProject[];
  private _Subscriptions: SubscriptionLike[] = [];

  @Output() Loaded = new EventEmitter<void>();

  constructor(
    private _ProjectService: ProjectService,
    private _NavigationService: NavigationService,
    private _AppStateService: AppStateService
  ) {}

  ngOnInit() {
    this.registerSubscription(
      this._ProjectService.getProjects().subscribe(projects => {
        this.Projects = projects;
        this.Loaded.emit();
      })
    );
  }

  public onProject(project: IProject): void {
    this._AppStateService.CloseMenue();
    switch (project.Key) {
      case 'wpf':
        this._NavigationService.navigateWpf();
        break;
      case 'angular':
        this._NavigationService.navigateAngular();
        break;
      case 'react':
        this._NavigationService.navigateReact();
        break;
      case 'service-net':
        this._NavigationService.navigateServiceNet();
        break;
    }
  }

  private registerSubscription(subscription: SubscriptionLike): void {
    this._Subscriptions.push(subscription);
  }
}
