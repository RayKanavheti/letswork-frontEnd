import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/internal/operators/retry';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { IUser } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environment.API_BASE_URL;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private httpClient: HttpClient) { }

//   Login(credentials): Observable<IUserWithToken> {
//     const url = `${this.BASE_URL}/api/login`;
//     return this.httpClient.post<IUserWithToken>(url, credentials, this.httpOptions)
//       .pipe(
//         retry(2),
//         catchError(this.handleError)
//       );
//   }

  Register(user: IUser): Observable<IUser> {
    const url = `${this.BASE_URL}/api/user`;
    return this.httpClient.post<IUser>(url, {...user}, this.httpOptions)
      .pipe(
        // retry(2),
        catchError(this.handleError)
      );
  }

  getUserByUUIDCode(uuid: any): Observable<IUser> {
    const url = `${this.BASE_URL}/api/user_confirm/` + uuid;
    return this.httpClient.get<IUser>(url)
      .pipe(
        retry(2), // retry a failed request up to 3 times
        catchError(this.handleError));
  }

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
