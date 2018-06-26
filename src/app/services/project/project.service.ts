import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _Projects = [{ Name: 'WPF' }, { Name: 'Angular' }];

  constructor() {}

  public getProjects(): { Name: string }[] {
    return this._Projects;
  }
}
