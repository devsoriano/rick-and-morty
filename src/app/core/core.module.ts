import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from './services/rickAndMorty/rick-and-morty.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [RickAndMortyService],
})
export class CoreModule {}
