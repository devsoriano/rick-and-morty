import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEpisodeRoutingModule } from './detail-episode-routing.module';
import { EpisodeComponent } from './components/episode/episode.component';
import { DetailComponent } from './components/detail/detail.component';
import { CharacterComponent } from './components/character/character.component';


@NgModule({
  declarations: [
    EpisodeComponent,
    DetailComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    DetailEpisodeRoutingModule
  ]
})
export class DetailEpisodeModule { }
