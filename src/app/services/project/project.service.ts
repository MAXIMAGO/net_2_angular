import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface IProject {
  Name: string;
  Key: string;
}

/**
 * A random domain driven service providing access to a resource api e.g. rest-backend
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _Url = 'api/projects';

  constructor(private _HttpClient: HttpClient, private _SnackBar: MatSnackBar) {}

  public getProjects(): Observable<IProject[]> {
    return this._HttpClient.get<IProject[]>(this._Url).pipe(catchError(this.handleError('getProjects', [])));
  }

  public scuffoldProject(config: any): Observable<string> {
    return Observable.create((subscriber: Subscriber<string>) => {
      /** at this point a service api may be called, we simulate an ansync delay of 2 seconds (5000ms) */
      setTimeout(() => {
        this._SnackBar.open(`project <${config.name}>  has been created`, 'Ok');
      }, 2000);
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`, error);
      return of(result as T);
    };
  }
}
