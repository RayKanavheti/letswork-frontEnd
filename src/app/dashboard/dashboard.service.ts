import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/internal/operators/retry';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IProjectFile } from '../shared/models/projectFiles';
import { IProject } from '../shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BASE_URL = environment.API_BASE_URL;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  submitProjectDetails(project: IProject): Observable<IProject> {
    const url = `${this.BASE_URL}/api/project`;
    return this.httpClient.post<IProject>(url, project, this.httpOptions)
    .pipe(
      retry(2), // retry a failed request up to 3 times
      catchError(this.handleError));
  }

  UploadProjectFiles(formdata: FormData, ProjectId: number): Observable<IProjectFile[]> {

    const url = `${this.BASE_URL}/api/files/` + ProjectId;
    return this.httpClient.post<IProjectFile[]>(url, formdata)
    .pipe(
      retry(2), // retry a failed request up to 3 times
      catchError(this.handleError));
  }
  // Catching Errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('the ERROR', error);
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log('the ERROR', error);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
