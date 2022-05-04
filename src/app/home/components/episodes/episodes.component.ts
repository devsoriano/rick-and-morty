import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IResult } from '../../../core/models/episode/episode.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  @Input() episode: IResult | undefined;
  @Output() episodeClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
