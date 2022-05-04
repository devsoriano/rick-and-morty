import { Component, OnInit, Input } from '@angular/core';
import { IResult } from '../../../core/models/episode/episode.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() detail: IResult | undefined;

  constructor() {}

  ngOnInit(): void {}
}
