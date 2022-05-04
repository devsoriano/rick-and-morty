import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

@NgModule({
  declarations: [HomeComponent, EpisodesComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
