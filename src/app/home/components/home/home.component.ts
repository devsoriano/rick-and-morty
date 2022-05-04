import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  form!: FormGroup;

  episodes: IResult[] = [];

  info: TInfo = {
    pages: 0,
  };

  page: number = 1;

  pagePrev: number = 0;

  pageNext: number = 2;

  name: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private rickAndMortyService: RickAndMortyService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.chargeEpisodes(this.page, '');
  }

  chargeEpisodes(page: number, name: string) {
    this.page = page;
    this.rickAndMortyService.getEpisodes(page, name).subscribe((episodes) => {
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

  searchEpisodes(event: Event) {
    event.preventDefault();
    if (this.form?.valid) {
      console.log(this.form.value.search);
      this.chargeEpisodes(1, this.form.value.search);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      search: ['', [Validators.required]],
    });
  }
}
