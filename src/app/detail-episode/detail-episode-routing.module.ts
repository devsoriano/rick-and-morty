import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './components/episode/episode.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEpisodeRoutingModule {}
