import { ProjectService } from './../../services/project/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public Projects: { Name: string }[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.Projects = this.projectService.getProjects();
  }
}
