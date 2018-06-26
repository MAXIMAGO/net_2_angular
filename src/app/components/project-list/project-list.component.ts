import { ProjectService, IProject } from './../../services/project/project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public Projects: IProject[];

  constructor(private _ProjectService: ProjectService, private _Router: Router) {}

  ngOnInit() {
    this.Projects = this._ProjectService.getProjects();
  }

  public onProject(project: IProject): void {
    this._Router.navigateByUrl(`/${project.Key}`);
  }
}
