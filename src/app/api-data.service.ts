import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private apiUrl = 'https://newsapi90.p.rapidapi.com/topic?topicId=CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB&language=en-US&region=US'
  private headers = {
    'x-rapidapi-host': 'newsapi90.p.rapidapi.com',
    'x-rapidapi-key': '94ff45c912msh37e73e2315aff12p19b5b8jsn37819de57d62',
    // 'Content-Type': 'application/json'
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
