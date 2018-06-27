import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface IProject {
  Name: string;
  Key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _Url = 'api/projects';

  constructor(private _HttpClient: HttpClient) {}

  public getProjects(): Observable<IProject[]> {
    return this._HttpClient.get<IProject[]>(this._Url).pipe(catchError(this.handleError('getProjects', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`, error);
      return of(result as T);
    };
  }
}
