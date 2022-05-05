import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RickAndMortyService } from './../../../core/services/rickAndMorty/rick-and-morty.service';
import { IResult } from '../../../core/models/episode/episode.model';
import { EPISODES } from '../../../core/services/external/hbo-hack';
import { ICharacter } from 'src/app/core/models/episode/character.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  detail: IResult = {
    air_date: '',
    characters: [],
    charactersDetails: [],
    name: '',
    posterMax: '',
  };

  charactersDetails: ICharacter[] = [];

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
      const posterMax = `https://art-gallery-latam.api.hbo.com/images/${dataEpisode[0].poster}/tile?v=66c0d5a9cd3b663e9aee7771f4fa0bcd&size=1520x855&compression=low&protection=false`;
      this.detail = { ...detail, posterMax };

      this.charactersDetails = [];
      detail.characters?.map((characterApi) => {
        this.rickAndMortyService
          .getCharacter(characterApi)
          .subscribe((character) => {
            this.charactersDetails.push(character);
          });
      });
      console.log(this.charactersDetails);
    });
  }

  getCharactersDetail() {}
}
