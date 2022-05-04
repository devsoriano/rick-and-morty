import { Component, OnInit } from '@angular/core';

import { RickAndMortyService } from './../../../core/services/rickAndMorty/rick-and-morty.service';
import {
  TInfo,
  IResult,
  TEpisode,
} from './../../../core/models/episode/episode.model';
import { EPISODES } from './../../../core/services/external/hbo-hack';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  episodes: IResult[] = [];

  info: TInfo = {
    pages: 0,
  };

  page: number = 1;

  pagePrev: number = 0;

  pageNext: number = 2;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.chargeEpisodes(this.page);
  }

  chargeEpisodes(page: number) {
    this.page = page;
    this.rickAndMortyService.getEpisodes(page).subscribe((episodes) => {
      this.info = episodes.info;
      this.pagePrev = this.page - 1;
      this.pageNext = this.page + 1;
      this.getEpisodies(episodes);
    });
  }

  getEpisodies(episodes: TEpisode) {
    const listEpisodes = episodes.results;
    let newListEpisodes: IResult[] = [];

    listEpisodes.map((data: IResult) => {
      let dataEpisode = EPISODES.filter((episode) => episode.id === data.id);
      const posterMin = `https://art-gallery-latam.api.hbo.com/images/${dataEpisode[0].poster}/tile?v=51d497170459d9bf5f92d4781df3a08a&size=400x225&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:adult-swim&language=es-419`;
      newListEpisodes.push({ ...data, posterMin });
    });

    this.episodes = newListEpisodes;
  }
}
