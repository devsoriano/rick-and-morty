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
    this.getEpisodes(this.page);
  }

  getEpisodes(page: number) {
    this.page = page;
    this.rickAndMortyService.getEpisodes(page).subscribe((episodes) => {
      this.info = episodes.info;
      this.pagePrev = this.page - 1;
      this.pageNext = this.page + 1;
      this.getEpisodiesComplete(episodes);
    });
  }

  getEpisodiesComplete(episodes: TEpisode) {
    const listEpisodes = episodes.results;
    let newListEpisodes: IResult[] = [];

    listEpisodes.map((data: IResult) => {
      let dataEpisode = EPISODES.filter((episode) => episode.id === data.id);

      const poster = dataEpisode[0].poster;
      const posterMin = `https://art-gallery-latam.api.hbo.com/images/${poster}/tile?v=51d497170459d9bf5f92d4781df3a08a&size=400x225&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:adult-swim&language=es-419`;
      // const posterMax = `https://art-gallery-latam.api.hbo.com/images/${poster}/tile?v=62e895434757c62a346b60b59dbb0df2&size=1120x630&compression=low&protection=false`;

      /*const characterIds: TCharacterId[] = [];
      data.characters.map((character) => {
        characterIds.push(parseInt(character.substring(-1)));
      });*/
      newListEpisodes.push({ ...data, posterMin });
    });

    this.episodes = newListEpisodes;
  }
}
