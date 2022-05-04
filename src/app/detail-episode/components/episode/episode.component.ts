import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RickAndMortyService } from './../../../core/services/rickAndMorty/rick-and-morty.service';
import { IResult } from '../../../core/models/episode/episode.model';
import { EPISODES } from '../../../core/services/external/hbo-hack';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  detail: IResult = {
    air_date: '',
    characters: [],
    name: '',
    posterMax: '',
  };

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.chargeEpisode(id);
    });
  }

  chargeEpisode(id: number) {
    this.rickAndMortyService.getEpisode(id).subscribe((detail: IResult) => {
      let dataEpisode = EPISODES.filter((episode) => episode.id === detail.id);
      const posterMax = `https://art-gallery-latam.api.hbo.com/images/${dataEpisode[0].poster}/tile?v=62e895434757c62a346b60b59dbb0df2&size=1120x630&compression=low&protection=false`;
      this.detail = { ...detail, posterMax };
      console.log(this.detail);
    });
  }
}
