import { ProjectService, IProject } from './../../services/project/project.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public Projects: IProject[];
  private _Subscriptions: SubscriptionLike[] = [];

  @Output() Loaded = new EventEmitter<void>();

  constructor(private _ProjectService: ProjectService, private _Router: Router) {}

  ngOnInit() {
    this.registerSubscription(
      this._ProjectService.getProjects().subscribe(projects => {
        this.Projects = projects;
        this.Loaded.emit();
      })
    );
  }

  public onProject(project: IProject): void {
    this._Router.navigateByUrl(`/${project.Key}`);
  }

  private registerSubscription(subscription: SubscriptionLike): void {
    this._Subscriptions.push(subscription);
  }
}
