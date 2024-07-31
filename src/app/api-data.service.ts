import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
  private headers = {
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
    'x-rapidapi-key': '27894bda82msh82be549b7bc5bdap116689jsn46f3e21e6f5a',
  };

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http
      .get<any[]>(this.apiUrl, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  private get httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
