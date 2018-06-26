import { Injectable } from '@angular/core';

export interface IProject {
  Name: string;
  Key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _Projects: IProject[] = [{ Name: 'WPF', Key: 'wpf' }, { Name: 'Angular', Key: 'angular' }];

  constructor() {}

  public getProjects(): IProject[] {
    return this._Projects;
  }
}
