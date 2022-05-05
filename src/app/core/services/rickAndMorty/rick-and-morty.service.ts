import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { TEpisode } from '../../models/episode/episode.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  getEpisodes(page: number, name: string) {
    return this.http
      .get<TEpisode>(`${environment.api}/episode?page=${page}&name=${name}`)
      .pipe(
        map((res: any) => res),
        catchError(this.handleError)
      );
  }

  getEpisode(id: number) {
    return this.http.get(`${environment.api}/episode/${id}`).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  getCharacter(url: string) {
    return this.http.get(url).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
