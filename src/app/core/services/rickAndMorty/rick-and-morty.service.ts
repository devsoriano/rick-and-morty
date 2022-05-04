import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TEpisode } from '../../models/episode/episode.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  getEpisodes(page: number) {
    return this.http.get<TEpisode>(`${environment.api}/episode?page=${page}`);
  }

  getEpisode(id: number) {
    return this.http.get(`${environment.api}/episode/${id}`);
  }

  getCharacter(url: string) {
    return this.http.get(url);
  }
}
